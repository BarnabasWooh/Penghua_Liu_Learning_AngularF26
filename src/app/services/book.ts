import { Injectable, signal, computed, inject } from '@angular/core';
import {Book, mapOpenLibraryBook, OpenLibraryResponse} from '../shared/model/book'
import {book_Config} from '../shared/book-config';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs';

@Injectable()
export class BookService {
  private http = inject(HttpClient);
  private config = inject(book_Config);
  apiBaseUrl =this.config.apiBaseUrl;

  // Delete the former books. Prepare empty array to receive from API
private books = signal<Book[]>([]);

// track the loading and error states
loading = signal(false);
error = signal<string | null>(null);

// Load books when the service starts
constructor() {this.load();}

  //Request books from the API
  load(){
  // Start loading and clear the previous error.
  this.loading.set(true);
  this.error.set(null);

// Send a get request to open library.
this.http.get<OpenLibraryResponse>(
  `${this.apiBaseUrl}/search.json`,
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
  // If successful, save books and stop loading.
  next: (list) => {
    this.books.set(list);
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
this.books.update(list => [...list, newBook]);
}

  nextId(): number {
    const ids = this.books()
      .map(b => b.id)
      .filter((id): id is number => typeof id === 'number');

    return Math.max(0, ...ids) + 1;
  }

removeBook(id: string | number){
  this.books.update(list => list.filter(book => book.id !== id));
}
  updateBook(updatedBook: Book) {
    this.books.update(list =>
      list.map(book =>
        book.id === updatedBook.id ? updatedBook : book
      )
    );
  }
  getBook(id: string): Book | undefined {
    return this.books().find(book => String(book.id) === id);
  }
}
