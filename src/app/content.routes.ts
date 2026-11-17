// Move the add and edit form routes together
import {BookForm} from './book-form/book-form';
import {editGuard} from './guards/edit-guard';
import { Routes} from '@angular/router';

export default [
  {
    path: 'add',
    component: BookForm
  },
  {
    path: 'books/edit/:id',
    component: BookForm,
    canActivate: [editGuard]
  }
] satisfies Routes;
