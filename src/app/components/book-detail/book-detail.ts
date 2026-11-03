import { Component, inject, input, computed } from '@angular/core';
import {BookService} from '../../services/book';

@Component({
  imports: [],
  selector: 'app-book-detail',
  styleUrl: './book-detail.scss',
  templateUrl: './book-detail.html',
})
export class BookDetail {
  private bookService = inject(BookService);

  id = input<string>();

  book = computed(() =>
    this.bookService.bookList().find(
      b => String(b.id) === this.id()
    )
  );
}
