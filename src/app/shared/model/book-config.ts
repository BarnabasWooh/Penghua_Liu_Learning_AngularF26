import { InjectionToken } from '@angular/core';

export class BookConfig {
  apiBaseUrl: string;
  defaultAuthor: string;
}

export const book_Config = new InjectionToken<BookConfig>('BookConfig');
