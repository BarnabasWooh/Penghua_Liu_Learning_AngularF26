import {Component, inject} from '@angular/core';
import {BookListItem} from '../book-list-item/book-list-item';
import { BookEvent} from '../shared/model/book';
import {BookService} from '../services/book';
import { RouterLink } from '@angular/router';

@Component({
  imports: [
    BookListItem,
    RouterLink
  ],
  selector: 'app-book-list',
  styleUrl: './book-list.css',
  templateUrl: './book-list.html',
})
export class BookList {
  private bookService = inject(BookService);
  bookList = this.bookService.bookList;

  booksWithDescription = this.bookService.booksWithDescription;

  booksWithDescriptionCount = this.bookService.booksWithDescriptionCount;

  fantasyBookCount = this.bookService.fantasyBookCount;

  apiBaseUrl = this.bookService.apiBaseUrl;

  onChildAction(event: BookEvent) {
    this.bookService.removeBook(event.id);
}
// Delete a book from the local list
  deleteBook(id: string | number): void{
    this.bookService.removeBook(id);
  }
}
