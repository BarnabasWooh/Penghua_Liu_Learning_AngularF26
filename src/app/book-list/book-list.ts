import { Component } from '@angular/core';
import {Book} from '../shared/model/book';
import {BookListItem} from '../book-list-item/book-list-item';

@Component({
  imports: [
    BookListItem
  ],
  selector: 'app-book-list',
  styleUrl: './book-list.css',
  templateUrl: './book-list.html',
})
export class BookList {bookList: Book[] = [
  {
    id: 1,
    name: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Fiction",
    description: "A novel about the serious issues of rape and racial inequality.",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BZTlkYWU4MGEtZmQyYi00OWEzLTgzY2EtYzVjOTEzYzAyNTk1XkEyXkFqcGc@._V1_.jpg",
    },
  {
    id: "B-002",
    name: "1984",
    author: "George Orwell",
    category: "Dystopian",
    imageUrl: "https://cdn.waterstones.com/bookjackets/large/9780/1410/9780141036144.jpg",
  },

  {
    id: 3,
    name: "Pride and Prejudice",
    author: "Jane Austen",
    category: "Romance",
    description: "Follows the character development of Elizabeth Bennet, the dynamic protagonist of the book.",
    imageUrl: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1681804503i/129915654.jpg",
  },
  {
    id: "B-04",
    name: "The Catcher in the Rye",
    author: "J.D. Salinger",
    category: "Fiction",
    imageUrl: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1398034300i/5107.jpg",
  },
  {
    id: 5,
    name: "The Hobbit",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    description: "The quest of home-loving Bilbo Baggins to win a share of the treasure guarded by Smaug the dragon.",
    imageUrl: "https://cdn11.bigcommerce.com/s-q1ut6awpbh/images/stencil/1280x1280/products/11938/27803/The_Hobbit_A_Graphic_Novel__68688.1760480673.jpg?c=1",
  },

  {
    id: "B-06",
    name: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    description: "An epic high-fantasy novel that follows the quest to destroy the One Ring.",
    imageUrl: "https://static.life.com/wp-content/uploads/2022/01/04205402/ian-mckellen-RN7G3D-1024x856.jpg",
  }
];



  onChildAction(event: any) {
    console.log("Item event received:", event);
}
}
