import { Component, inject, input, effect, computed} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from "@angular/forms";
import {BookService} from '../services/book';
import { Router } from "@angular/router";

// Validator for whitespace
function noWhitespace(control: AbstractControl): ValidationErrors | null {
  const value = control.value as string;

  if (value.trim() === '') {
    return { whitespace: true };
  }

  return null;
}

function nameAuthorValidator(control: AbstractControl): ValidationErrors | null {
  const name = control.get('name')?.value as string;
  const author = control.get('author')?.value as string;

  if (name && author && name.trim().toLowerCase() === author.trim().toLowerCase()) {
    return { sameNameAuthor: true };
  }

  return null;
}

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
  id = input<string>();
  protected isEditMode = computed(() => this.id() !== undefined);

  protected onSubmit(): void {
    if (this.bookForm.invalid) {
      return;
    }

    const formValue = this.bookForm.getRawValue();
    const currentId = this.id();

    if (currentId !== undefined) {
      console.log('Edit ID:', currentId);
      console.log('Book found:', this.bookService.getBook(currentId));
      const existingBook = this.bookService.getBook(currentId);

      if (!existingBook) {
        return;
      }

      this.bookService.updateBook({
        ...existingBook,
        ...formValue
      });

      this.router.navigate(['/books', currentId]);
    } else {
      const id = this.bookService.nextId();

      this.bookService.addBook({ id, ...formValue });

      this.bookForm.reset();
      this.router.navigate(['/books', id]);
    }
  }

  protected bookForm = this.fb.nonNullable.group({
    name: ['', [ Validators.required, Validators.minLength(2), noWhitespace]],
    author: ['', Validators.required],
    category: [''],
    description: ['']},
    { validators: nameAuthorValidator });

  constructor() {
    effect(() => {
      const id = this.id();

      if (id === undefined) {
        return;
      }

      const book = this.bookService.getBook(id);

      if (book) {
        this.bookForm.patchValue(book);
      }
    });
  }
}
