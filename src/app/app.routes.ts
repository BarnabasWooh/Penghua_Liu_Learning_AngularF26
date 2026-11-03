import { Routes } from '@angular/router';
import {BookDetail} from './components/book-detail/book-detail';
import {BookList} from './book-list/book-list';
import {BookForm} from './book-form/book-form';
import { editGuard } from './guards/edit-guard';

export const routes: Routes = [

  { path: 'books/:id', component: BookDetail },
  {
    path: 'books/edit/:id',
    component: BookForm,
    canActivate: [editGuard]
  },
// pathMatch: 'full' is required for an empty path. Every URL starts with an empty string,
  // so with the default prefix matching this redirect would match every URL.
  { path: '', redirectTo: 'books', pathMatch: 'full'},
  { path: 'books', component: BookList },

  { path: 'add', component: BookForm}
];
