import { Routes } from '@angular/router';
import {BookList} from './book-list/book-list';

export const routes: Routes = [
// Lazy loading with load components.
  { path: 'books/:id', loadComponent: () => import('./components/book-detail/book-detail').then(m => m.BookDetail), },

// pathMatch: 'full' is required for an empty path. Every URL starts with an empty string,
  // so with the default prefix matching this redirect would match every URL.
  { path: '', redirectTo: 'books', pathMatch: 'full'},
  { path: 'books', component: BookList },

  // Lazy load the Add and Edit routes together
  {
    path: '',
    loadChildren: () => import('./content.routes')
  },
];
