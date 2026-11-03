import { Routes } from '@angular/router';
import {BookDetail} from './components/book-detail/book-detail';
import {BookList} from './book-list/book-list';

export const routes: Routes = [

  { path: 'books/:id', component: BookDetail },
// pathMatch: 'full' is required for an empty path. Every URL starts with an empty string,
  // so with the default prefix matching this redirect would match every URL.
  { path: '', redirectTo: 'books', pathMatch: 'full'},
  { path: 'books', component: BookList },
];
