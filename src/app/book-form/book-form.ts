import { Component, inject} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import {BookService} from '../services/book';
import { Router } from "@angular/router";

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-book-form',
  styleUrl: './book-form.scss',
  templateUrl: './book-form.html',
})
export class BookForm {
  private fb = inject(FormBuilder);
  private bookService = inject  (BookService);
  private router = inject (Router);

  protected onSubmit(): void {
    if (this.bookForm.invalid) {
      return;
    }

    const formValue = this.bookForm.getRawValue();
    const id = this.bookService.nextId();

    this.bookService.addBook({ id, ...formValue });

    this.bookForm.reset();
    this.router.navigate(['/books', id]);
  }

  protected bookForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    author: ['', Validators.required],
    category: [''],
    description: [''],
  })
}
