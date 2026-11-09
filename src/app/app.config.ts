import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import {book_Config} from './shared/book-config';
import { BookService} from './services/book';
import { MockBookService} from './services/mock-book';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {loadingInterceptor} from './interceptors/loading-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([loadingInterceptor])),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    {
      provide: book_Config,
      useValue: {
        // Switch placeholder api to active OpenLibrary API.
        apiBaseUrl: 'https://openlibrary.org', defaultAuthor: ''
      }
    },
    {
      provide: BookService,
      useClass: BookService
    }
  ]

};
