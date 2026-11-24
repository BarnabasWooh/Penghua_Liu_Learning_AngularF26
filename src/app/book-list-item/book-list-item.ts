import {Component, input, output} from '@angular/core';
import {Book} from '../shared/model/book';
import { BookEvent} from '../shared/model/book';
import {SlicePipe, TitleCasePipe} from '@angular/common';
import {TruncatePipe} from '../pipes/truncate-pipe';
import { Highlight} from '../directives/highlight';

@Component({
  imports: [
    TitleCasePipe,
    SlicePipe,
    TruncatePipe,
    Highlight
  ],
  selector: 'app-book-list-item',
  hostDirectives: [
    {
      directive: Highlight,
      inputs: ['appHighlight: highlightColor'],
    },
  ],
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
      action: 'clicked'
    });
  }
}
