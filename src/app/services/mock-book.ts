import { Injectable, signal, computed } from '@angular/core';
import { Book } from '../shared/model/book';

@Injectable()
export class MockBookService {

  private books = signal<Book[]>([
    {
      id: 1,
      name: 'MOCK BOOK ONE',
      author: 'Mock Author1',
      category: 'Fantasy',
      description: 'Mock data for testing.'
    },
    {
      id: 2,
      name: 'MOCK BOOK TWO',
      author: 'Mock Author2',
      category: 'Fiction'
    }
  ]);

  bookList = this.books.asReadonly();

  booksWithDescription = computed(() =>
    this.books().filter(book => book.description)
  );

  booksWithDescriptionCount = computed(() =>
    this.booksWithDescription().length
  );

  fantasyBookCount = computed(() =>
    this.books().filter(book => book.category === 'Fantasy').length
  );

  apiBaseUrl = 'MOCK API';

  addBook(newBook: Book) {
    this.books.update(list => [...list, newBook]);
  }

  removeBook(id: string | number) {
    this.books.update(list =>
      list.filter(book => book.id !== id)
    );
  }
}
