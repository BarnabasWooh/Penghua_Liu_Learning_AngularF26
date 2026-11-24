import {Component, inject, input, computed, OnInit, OnDestroy} from '@angular/core';
import {BookService} from '../../services/book';
import {AuthorLabelPipe} from '../../pipes/author-label-pipe';
import {Highlight} from '../../directives/highlight';
import {Saved} from '../../services/saved';

@Component({
  imports: [AuthorLabelPipe, Highlight],
  selector: 'app-book-detail',
  styleUrl: './book-detail.scss',
  templateUrl: './book-detail.html',
})
export class BookDetail implements OnInit, OnDestroy {
  private bookService = inject(BookService);
  protected savedService = inject(Saved);

  id = input<string>();

  book = computed(() =>
    this.bookService.bookList().find(
      b => String(b.id) === this.id()
    )
  );

  // Store the time when intializing and openning on the detail page
  private openedAt = 0;
  private bookName = 'Unknown book';

  ngOnInit():void {
    // Find the book after the route input is initialized.
    const selectedBook = this.book();
    this.bookName = selectedBook?.name ?? 'Unknown book';

    // Record the opening time.
    this.openedAt = Date.now();
    console.log('[lifecycle] opened:', this.bookName);
  }

  // Calculate the time spent on the detail page
  ngOnDestroy():void {
  const seconds = Math.round((Date.now() - this.openedAt) / 1000);
  console.log(`[lifecycle] closed: ${this.bookName} after ${seconds} seconds`);
  }

  protected readonly String = String;
}
