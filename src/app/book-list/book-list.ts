import { Component, inject } from '@angular/core';
import {BookListItem} from '../book-list-item/book-list-item';
import { BookEvent} from '../shared/model/book';
import {BookService} from '../services/book';

@Component({
  imports: [
    BookListItem
  ],
  selector: 'app-book-list',
  styleUrl: './book-list.css',
  templateUrl: './book-list.html',
})
export class BookList {
  private bookService = inject(BookService);
  bookList = this.bookService.bookList;

  onChildAction(event: BookEvent) {
    console.log("Item event received:", event);
    console.log()
}
}
