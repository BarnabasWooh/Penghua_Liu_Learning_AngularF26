import { Routes } from '@angular/router';
import {BookList} from './book-list/book-list';
import { editGuard } from './guards/edit-guard';

export const routes: Routes = [
// Lazy loading with load components.
  { path: 'books/:id', loadComponent: () => import('./components/book-detail/book-detail').then(m => m.BookDetail), },
  {
    path: 'books/edit/:id',
    // Lazy load the edit form.
    loadComponent: () => import('./book-form/book-form').then(m=>m.BookForm),
    canActivate: [editGuard]
  },
// pathMatch: 'full' is required for an empty path. Every URL starts with an empty string,
  // so with the default prefix matching this redirect would match every URL.
  { path: '', redirectTo: 'books', pathMatch: 'full'},
  { path: 'books', component: BookList },

// Lazy load the add form.
  { path: 'add', loadComponent: () => import('./book-form/book-form').then(m=>m.BookForm)}
];
