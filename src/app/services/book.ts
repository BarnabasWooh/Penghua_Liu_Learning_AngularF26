import { Injectable, signal, computed, inject, effect } from '@angular/core';
import {Book, mapOpenLibraryBook, OpenLibraryResponse} from '../shared/model/book'
import {book_Config} from '../shared/book-config';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs';

@Injectable()
export class BookService {
  private http = inject(HttpClient);
  private config = inject(book_Config);
  apiBaseUrl =this.config.apiBaseUrl;

// Store only books created by the user.
  private storageKey = 'book-library.myBooks';
  private localBooks = signal<Book[]>(this.loadLocalBooks());

// Combine local books with API books in the existing list.
  private books = signal<Book[]>([...this.localBooks()]);

// track the loading and error states
loading = signal(false);
error = signal<string | null>(null);

  constructor() {
    // Save user-created books whenever they change.
    effect(() => {
      try {
        localStorage.setItem(
          this.storageKey,
          JSON.stringify(this.localBooks())
        );
      } catch {
        // Continue working if browser storage is unavailable.
      }
    });

    // Fetch API books normally.
    this.load();
  }

  //Request books from the API
  load(){
  // Start loading and clear the previous error.
  this.loading.set(true);
  this.error.set(null);

// Send a get request to open library.
this.http.get<OpenLibraryResponse>(
  `${this.apiBaseUrl}/search.json?q=Christian+spiritual+growth&limit=20`,
{
  params: {
    q: 'Christian spiritual growth',
  limit: 20
}
}
  ).pipe(
    // Get the docs array and convert each item to Book.
    map(response => response.docs.map(mapOpenLibraryBook))
).subscribe({
  next: (list) => {
    // Combine fresh API data with user-created books.
    this.books.set([...list, ...this.localBooks()]);
    this.loading.set(false);
  },

  // If the request fails, show an error and stop loading
  error: () => {
    this.error.set('Could not load books.');
    this.loading.set(false);
}
});
}
bookList = this.books.asReadonly();

booksWithDescription = computed(() =>
this.books().filter(book => book.description));

  booksWithDescriptionCount = computed(() =>
    this.booksWithDescription().length
  );

  fantasyBookCount = computed(() =>
    this.books().filter(book => book.category === 'Fantasy').length
  );

  addBook(newBook: Book) {
    // Persist the user-created book.
    this.localBooks.update(list => [...list, newBook]);

    // Add the book to the displayed list.
    this.books.update(list => [...list, newBook]);
  }

  nextId(): number {
    const ids = this.books()
      .map(b => b.id)
      .filter((id): id is number => typeof id === 'number');

    return Math.max(0, ...ids) + 1;
  }

  removeBook(id: string | number) {
    // Remove the book from both lists when applicable.
    this.localBooks.update(list => list.filter(book => book.id !== id));
    this.books.update(list => list.filter(book => book.id !== id));
  }
  updateBook(updatedBook: Book) {
    // Persist edits only when the book was created locally.
    this.localBooks.update(list =>
      list.map(book =>
        book.id === updatedBook.id ? updatedBook : book
      )
    );

    // Update the displayed book regardless of its source.
    this.books.update(list =>
      list.map(book =>
        book.id === updatedBook.id ? updatedBook : book
      )
    );
  }
  getBook(id: string): Book | undefined {
    return this.books().find(book => String(book.id) === id);
  }

  // Restore books created by the user.
  private loadLocalBooks(): Book[] {
    try {
      const data: unknown = JSON.parse(
        localStorage.getItem(this.storageKey) ?? '[]'
      );

      // Ignore invalid stored data.
      return Array.isArray(data)
        ? data.filter(book =>
          book !== null &&
          typeof book === 'object' &&
          typeof book.name === 'string' &&
          typeof book.id === 'number'
        )
        : [];
    } catch {
      // Continue with an empty list if storage cannot be read.
      return [];
    }
  }
}
