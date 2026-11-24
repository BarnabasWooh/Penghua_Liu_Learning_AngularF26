import { Component, computed, inject, signal, effect } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Saved } from '../../services/saved';
import { BookService } from '../../services/book';

@Component({
  selector: 'app-saved',
  imports: [RouterLink],
  templateUrl: './saved.html',
  styleUrl: './saved.scss',
})
export class SavedPage {
  private savedService = inject(Saved);
  private bookService = inject(BookService);
  // Store the user's preferred sorting order.
  protected sortOrder = signal(this.loadSortOrder());

// Read the saved sorting preference.
  private loadSortOrder(): 'asc' | 'desc' {
    try {
      return localStorage.getItem('book-library.sortOrder') === 'desc'
        ? 'desc'
        : 'asc';
    } catch {
      return 'asc';
    }
  }
// Find saved books and sort them by name.
  protected savedBooks = computed(() => {
    const books = this.bookService.bookList().filter(book =>
      this.savedService.savedList().includes(String(book.id))
    );

    return [...books].sort((a, b) =>
      this.sortOrder() === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
  });
  constructor() {
    // Save the sorting preference when it changes.
    effect(() => {
      try {
        localStorage.setItem('book-library.sortOrder', this.sortOrder());
      } catch {
        // Continue working when browser storage is unavailable.
      }
    });
  }
}
