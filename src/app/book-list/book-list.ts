import { Component } from '@angular/core';
import {Book} from '../shared/model/book';
import {BookListItem} from '../book-list-item/book-list-item';
import { BookEvent} from '../shared/model/book';

@Component({
  imports: [
    BookListItem
  ],
  selector: 'app-book-list',
  styleUrl: './book-list.css',
  templateUrl: './book-list.html',
})
export class BookList {



  onChildAction(event: BookEvent) {
    console.log("Item event received:", event);
    console.log()
}
}
