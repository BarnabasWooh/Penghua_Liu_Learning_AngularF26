import {Component, input} from '@angular/core';
import {Book} from '../shared/model/book';

@Component({
  imports: [],
  selector: 'app-book-list-item',
  styleUrl: './book-list-item.css',
  templateUrl: './book-list-item.html',
})
export class BookListItem {
  item = input.required<Book>();
}
