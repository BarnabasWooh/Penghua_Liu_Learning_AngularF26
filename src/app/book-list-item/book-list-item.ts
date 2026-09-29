import {Component, input, output} from '@angular/core';
import {Book} from '../shared/model/book';
export interface BookEvent {
  id: number | string;
  action: 'opened' | 'favourited';
}
@Component({
  imports: [],
  selector: 'app-book-list-item',
  styleUrl: './book-list-item.css',
  templateUrl: './book-list-item.html',
})
export class BookListItem {
  item = input.required<Book>();
  isEven = input<boolean>(false);
  actionEmitter = output<BookEvent>();
  onCardClick() {
    this.actionEmitter.emit({
      id: this.item().id,
      action: 'opened'
    });
  }
}
