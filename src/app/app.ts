import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Book } from './shared/model/book';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title=  'Penghua';
  protected readonly  weather = 'Sunny';
  books: Book[] = [
    {
      id: 1,
      name: "To Kill a Mockingbird",
      author: "Harper Lee",
      category: "Fiction",
      description: "A novel about the serious issues of rape and racial inequality."
    },
    {
      id: "B-002",
      name: "1984",
      author: "George Orwell",
      category: "Dystopian",
    },

    {
      id: 3,
      name: "Pride and Prejudice",
      author: "Jane Austen",
      category: "Romance",
      description: "Follows the character development of Elizabeth Bennet, the dynamic protagonist of the book."
    },
    {
      id: "B-04",
      name: "The Catcher in the Rye",
      author: "J.D. Salinger",
      category: "Fiction",
    },
    {
      id: 5,
      name: "The Hobbit",
      author: "J.R.R. Tolkien",
      category: "Fantasy",
      description: "The quest of home-loving Bilbo Baggins to win a share of the treasure guarded by Smaug the dragon."
    },

    {
      id: "B-06",
      name: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      category: "Fantasy",
      description: "An epic high-fantasy novel that follows the quest to destroy the One Ring."
    }
  ]
}


