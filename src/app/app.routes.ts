import { Routes } from '@angular/router';
import {BookDetail} from './components/book-detail/book-detail';


export const routes: Routes = [
  {
    path: 'books/:id',
    component: BookDetail
  }
];
