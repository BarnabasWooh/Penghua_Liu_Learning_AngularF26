import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {book_Config} from './shared/book-config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: book_Config,
      useValue: {
        apiBaseUrl: 'https://placeholder.example.com/ap1', defaultAuthor: 'Harper Lee'}
    }
  ]
};
