import { InjectionToken } from '@angular/core';

export interface BookConfig {
  apiBaseUrl: 'https://openlibrary.org'
  defaultAuthor: string;
}

export const book_Config = new InjectionToken<BookConfig>('BookConfig');

