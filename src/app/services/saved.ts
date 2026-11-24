import { Service, signal, effect } from '@angular/core';

@Service()
export class Saved {
  private storageKey = 'book-library.saved';
  private savedIds = signal<string[]>((this.load()));
  readonly savedList = this.savedIds.asReadonly();

  constructor() {
    // Automatically persist saved IDs when the signal changes.
    effect(() => {
      try {
        localStorage.setItem(
          this.storageKey,
          JSON.stringify(this.savedIds())
        );
      } catch {
        // Keep the application working if storage is blocked or full.
      }
    });
  }

  // Add or remove a book ID
  toggle(id: string){
    this.savedIds.update(ids =>
    ids.includes(id)
    ? ids.filter(savedId => savedId !== id)
    : [...ids, id]);
  }

  // Check whether a book is saved.
  isSaved(id: string): boolean {
    return  this.savedIds().includes(id);
  }

  // Read saved book IDs from localStorage.
  private load(): string []{
    try {
      const stored = localStorage.getItem(this.storageKey);
      const ids: unknown = JSON.parse(stored ?? '[]');

      // Accept only an array of string IDs.
      return  Array.isArray(ids) && ids.every(id=> typeof id === 'string') ?ids : [];
    } catch {
      // Return an empty list if storage is unavailable or invalid.
      return [];
    }
  }
}
