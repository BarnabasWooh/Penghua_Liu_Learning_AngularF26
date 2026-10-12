import { InjectionToken } from '@angular/core';

export interface BookConfig {
  apiBaseUrl: string;
  defaultAuthor: string;
}

export const book_Config = new InjectionToken<BookConfig>('BookConfig');

