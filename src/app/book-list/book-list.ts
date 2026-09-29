import { Component } from '@angular/core';
import {Book} from '../shared/model/book';
import {BookListItem} from '../book-list-item/book-list-item';
import { BookEvent} from '../shared/model/book';

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
    name: "The Lord of the Rings",/dev/fd/14:25: command not found: compdef
  lsl@lsldeMacBook-Pro PenghuaLiuLearningAngularF26 % git config --global Penghua_Liu
  error: key does not contain a section: Penghua_Liu
  lsl@lsldeMacBook-Pro PenghuaLiuLearningAngularF26 % ng g c book-list
  CREATE src/app/book-list/book-list.css (0 bytes)
  CREATE src/app/book-list/book-list.spec.ts (547 bytes)
  CREATE src/app/book-list/book-list.ts (196 bytes)
  CREATE src/app/book-list/book-list.html (24 bytes)
  lsl@lsldeMacBook-Pro PenghuaLiuLearningAngularF26 % ng g c book-list-item
  CREATE src/app/book-list-item/book-list-item.css (0 bytes)
  CREATE src/app/book-list-item/book-list-item.spec.ts (576 bytes)
  CREATE src/app/book-list-item/book-list-item.ts (215 bytes)
  CREATE src/app/book-list-item/book-list-item.html (29 bytes)
  lsl@lsldeMacBook-Pro PenghuaLiuLearningAngularF26 % ng serve
  Application bundle generation failed. [2.334 seconds] - 2026-09-26T20:32:29.268Z

▲ [WARNING] NG8113: All imports are unused [plugin angular-compiler]

  src/app/app.ts:6:2:
    6 │   imports: [RouterOutlet],
╵   ~~~~~~~


✘ [ERROR] NG8001: 'app-book-list' is not a known element:
    1. If 'app-book-list' is an Angular component, then verify that it is included in the '@Component.imports' of this component.
  2. If 'app-book-list' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@Component.schemas' of this component to suppress this message. Find more at https://next.angular.dev/errors/NG8001 [plugin angular-compiler]

    src/app/app.html:0:0:
    0 │
╵ ^

  Error occurs in the template of component App.

  src/app/app.ts:9:15:
    9 │   templateUrl: './app.html',
╵                ~~~~~~~~~~~~


  Watch mode enabled. Watching for file changes...
  Initial chunk files | Names         | Raw size
  main.js             | main          | 10.64 kB |
  styles.css          | styles        | 95 bytes |

| Initial total | 10.73 kB

  Application bundle generation complete. [0.724 seconds] - 2026-09-26T20:36:01.763Z

▲ [WARNING] NG8113: RouterOutlet is not used within the template of App [plugin angular-compiler]

  src/app/app.ts:7:12:
    7 │   imports: [RouterOutlet, BookList],
╵             ~~~~~~~~~~~~


  NOTE: Raw file sizes do not reflect development server per-request transformations.
➜  Local:   http://localhost:4200/
➜  press h + enter to show help
  Initial chunk files | Names | Raw size
  main.js             | main  | 10.97 kB |

  Application bundle generation complete. [0.581 seconds] - 2026-09-26T22:39:34.087Z

▲ [WARNING] NG8113: RouterOutlet is not used within the template of App [plugin angular-compiler]

  src/app/app.ts:7:12:
    7 │   imports: [RouterOutlet, BookList],
╵             ~~~~~~~~~~~~


  Component update sent to client(s).
  Initial chunk files | Names | Raw size
  main.js             | main  | 11.12 kB |

  Application bundle generation complete. [0.250 seconds] - 2026-09-26T22:40:14.966Z

▲ [WARNING] NG8113: RouterOutlet is not used within the template of App [plugin angular-compiler]

  src/app/app.ts:7:12:
    7 │   imports: [RouterOutlet, BookList],
╵             ~~~~~~~~~~~~


  Component update sent to client(s).
  Initial chunk files | Names | Raw size
  main.js             | main  | 12.24 kB |

  Application bundle generation complete. [0.284 seconds] - 2026-09-26T22:42:55.644Z

▲ [WARNING] NG8113: RouterOutlet is not used within the template of App [plugin angular-compiler]

  src/app/app.ts:7:12:
    7 │   imports: [RouterOutlet, BookList],
╵             ~~~~~~~~~~~~


  Component update sent to client(s).
  Initial chunk files | Names | Raw size
  main.js             | main  | 12.25 kB |

  Application bundle generation complete. [0.331 seconds] - 2026-09-26T22:44:47.743Z

▲ [WARNING] NG8113: RouterOutlet is not used within the template of App [plugin angular-compiler]

  src/app/app.ts:7:12:
    7 │   imports: [RouterOutlet, BookList],
╵             ~~~~~~~~~~~~


  Component update sent to client(s).
  Initial chunk files | Names | Raw size
  main.js             | main  | 13.25 kB |

  Application bundle generation complete. [0.156 seconds] - 2026-09-26T22:46:54.048Z

▲ [WARNING] NG8113: RouterOutlet is not used within the template of App [plugin angular-compiler]

  src/app/app.ts:7:12:
    7 │   imports: [RouterOutlet, BookList],
╵             ~~~~~~~~~~~~


  Component update sent to client(s).
  Initial chunk files | Names | Raw size
  main.js             | main  | 13.25 kB |

  Application bundle generation complete. [0.577 seconds] - 2026-09-26T23:04:53.531Z

▲ [WARNING] NG8113: RouterOutlet is not used within the template of App [plugin angular-compiler]

  src/app/app.ts:7:12:
    7 │   imports: [RouterOutlet, BookList],
╵             ~~~~~~~~~~~~


  Page reload sent to client(s).

  No output file changes.

  Application bundle generation complete. [0.182 seconds] - 2026-09-26T23:06:05.658Z

▲ [WARNING] NG8113: RouterOutlet is not used within the template of App [plugin angular-compiler]

  src/app/app.ts:7:12:
    7 │   imports: [RouterOutlet, BookList],
╵             ~~~~~~~~~~~~


  Initial chunk files | Names | Raw size
  main.js             | main  | 13.39 kB |

  Application bundle generation complete. [0.265 seconds] - 2026-09-26T23:06:56.301Z

▲ [WARNING] NG8113: RouterOutlet is not used within the template of App [plugin angular-compiler]

  src/app/app.ts:7:12:
    7 │   imports: [RouterOutlet, BookList],
╵             ~~~~~~~~~~~~


  Page reload sent to client(s).
  Initial chunk files | Names | Raw size
  main.js             | main  | 13.50 kB |

  Application bundle generation complete. [0.546 seconds] - 2026-09-26T23:09:15.391Z

▲ [WARNING] NG8113: RouterOutlet is not used within the template of App [plugin angular-compiler]

  src/app/app.ts:7:12:
    7 │   imports: [RouterOutlet, BookList],
╵             ~~~~~~~~~~~~


  Page reload sent to client(s).
  Initial chunk files | Names | Raw size
  main.js             | main  | 13.72 kB |

  Application bundle generation complete. [0.381 seconds] - 2026-09-26T23:09:36.865Z

▲ [WARNING] NG8113: RouterOutlet is not used within the template of App [plugin angular-compiler]

  src/app/app.ts:7:12:
    7 │   imports: [RouterOutlet, BookList],
╵             ~~~~~~~~~~~~


  Component update sent to client(s).
  Application bundle generation failed. [0.582 seconds] - 2026-09-26T23:13:47.981Z

▲ [WARNING] NG8113: RouterOutlet is not used within the template of App [plugin angular-compiler]

  src/app/app.ts:7:12:
    7 │   imports: [RouterOutlet, BookList],
╵             ~~~~~~~~~~~~


✘ [ERROR] TS1005: '}' expected. [plugin angular-compiler]

  src/app/book-list/book-list.ts:60:0:
    60 │
╵ ^


  Application bundle generation failed. [0.532 seconds] - 2026-09-26T23:15:07.413Z

▲ [WARNING] NG8113: RouterOutlet is not used within the template of App [plugin angular-compiler]

  src/app/app.ts:7:12:
    7 │   imports: [RouterOutlet, BookList],
╵             ~~~~~~~~~~~~


✘ [ERROR] TS1005: '}' expected. [plugin angular-compiler]

  src/app/book-list/book-list.ts:60:0:
    60 │
╵ ^



  ng serve
^C
  lsl@lsldeMacBook-Pro PenghuaLiuLearningAngularF26 % ng serve
  Application bundle generation failed. [1.835 seconds] - 2026-09-29T00:51:27.355Z

▲ [WARNING] NG8113: RouterOutlet is not used within the template of App [plugin angular-compiler]

  src/app/app.ts:7:12:
    7 │   imports: [RouterOutlet, BookList],
╵             ~~~~~~~~~~~~


✘ [ERROR] TS2741: Property 'imageUrl' is missing in type '{ id: number; name: string; author: string; category: string; description: string; }' but required in type 'Book'. [plugin angular-compiler]

  src/app/app.ts:16:4:
    16 │     {
╵     ^

  'imageUrl' is declared here.

  src/app/shared/model/book.ts:7:2:
    7 │   imageUrl: string;
╵   ~~~~~~~~


✘ [ERROR] TS2741: Property 'imageUrl' is missing in type '{ id: string; name: string; author: string; category: string; }' but required in type 'Book'. [plugin angular-compiler]

  src/app/app.ts:23:4:
    23 │     {
╵     ^

  'imageUrl' is declared here.

  src/app/shared/model/book.ts:7:2:
    7 │   imageUrl: string;
╵   ~~~~~~~~


✘ [ERROR] TS2741: Property 'imageUrl' is missing in type '{ id: number; name: string; author: string; category: string; description: string; }' but required in type 'Book'. [plugin angular-compiler]

  src/app/app.ts:30:4:
    30 │     {
╵     ^

  'imageUrl' is declared here.

  src/app/shared/model/book.ts:7:2:
    7 │   imageUrl: string;
╵   ~~~~~~~~


✘ [ERROR] TS2741: Property 'imageUrl' is missing in type '{ id: string; name: string; author: string; category: string; }' but required in type 'Book'. [plugin angular-compiler]

  src/app/app.ts:37:4:
    37 │     {
╵     ^

  'imageUrl' is declared here.

  src/app/shared/model/book.ts:7:2:
    7 │   imageUrl: string;
╵   ~~~~~~~~


✘ [ERROR] TS2741: Property 'imageUrl' is missing in type '{ id: number; name: string; author: string; category: string; description: string; }' but required in type 'Book'. [plugin angular-compiler]

  src/app/app.ts:43:4:
    43 │     {
╵     ^

  'imageUrl' is declared here.

  src/app/shared/model/book.ts:7:2:
    7 │   imageUrl: string;
╵   ~~~~~~~~


✘ [ERROR] TS2741: Property 'imageUrl' is missing in type '{ id: string; name: string; author: string; category: string; description: string; }' but required in type 'Book'. [plugin angular-compiler]

  src/app/app.ts:51:4:
    51 │     {
╵     ^

  'imageUrl' is declared here.

  src/app/shared/model/book.ts:7:2:
    7 │   imageUrl: string;
╵   ~~~~~~~~


  Watch mode enabled. Watching for file changes...
  Initial chunk files | Names         | Raw size
  main.js             | main          | 14.62 kB |
  styles.css          | styles        | 95 bytes |

| Initial total | 14.72 kB

  Application bundle generation complete. [0.787 seconds] - 2026-09-29T01:05:19.316Z

▲ [WARNING] NG8113: RouterOutlet is not used within the template of App [plugin angular-compiler]

  src/app/app.ts:7:12:
    7 │   imports: [RouterOutlet, BookList],
╵             ~~~~~~~~~~~~


  NOTE: Raw file sizes do not reflect development server per-request transformations.
➜  Local:   http://localhost:4200/
➜  press h + enter to show help
  Initial chunk files | Names | Raw size
  main.js             | main  | 14.53 kB |

  Application bundle generation complete. [0.548 seconds] - 2026-09-29T01:07:13.859Z

  Page reload sent to client(s).

^C
  lsl@lsldeMacBook-Pro PenghuaLiuLearningAngularF26 % ng serve
  Initial chunk files | Names         | Raw size
  main.js             | main          | 14.53 kB |
  styles.css          | styles        | 95 bytes |

| Initial total | 14.63 kB

  Application bundle generation complete. [1.861 seconds] - 2026-09-29T01:07:32.006Z

  Watch mode enabled. Watching for file changes...
  NOTE: Raw file sizes do not reflect development server per-request transformations.
➜  Local:   http://localhost:4200/
➜  press h + enter to show help
  Initial chunk files | Names | Raw size
  main.js             | main  | 14.56 kB |

  Application bundle generation complete. [1.316 seconds] - 2026-09-29T14:59:18.448Z

  Page reload sent to client(s).
  Initial chunk files | Names | Raw size
  main.js             | main  | 14.57 kB |

  Application bundle generation complete. [0.380 seconds] - 2026-09-29T15:00:10.645Z

  Page reload sent to client(s).
  Initial chunk files | Names | Raw size
  main.js             | main  | 14.61 kB |

  Application bundle generation complete. [0.506 seconds] - 2026-09-29T15:00:49.427Z

  Page reload sent to client(s).
  Initial chunk files | Names | Raw size
  main.js             | main  | 14.64 kB |

  Application bundle generation complete. [0.177 seconds] - 2026-09-29T15:01:13.277Z

  Page reload sent to client(s).
  Initial chunk files | Names | Raw size
  main.js             | main  | 14.65 kB |

  Application bundle generation complete. [0.433 seconds] - 2026-09-29T15:01:35.347Z

  Page reload sent to client(s).
  Initial chunk files | Names | Raw size
  main.js             | main  | 14.79 kB |

  Application bundle generation complete. [0.499 seconds] - 2026-09-29T15:02:23.948Z

  Page reload sent to client(s).
^C
  lsl@lsldeMacBook-Pro PenghuaLiuLearningAngularF26 % ng serve
  Initial chunk files | Names         | Raw size
  main.js             | main          | 14.79 kB |
  styles.css          | styles        | 95 bytes |

| Initial total | 14.88 kB

  Application bundle generation complete. [1.813 seconds] - 2026-09-29T15:02:37.759Z

  Watch mode enabled. Watching for file changes...
  NOTE: Raw file sizes do not reflect development server per-request transformations.
➜  Local:   http://localhost:4200/
➜  press h + enter to show help
  Initial chunk files | Names | Raw size
  main.js             | main  | 14.69 kB |

  Application bundle generation complete. [0.475 seconds] - 2026-09-29T15:04:56.807Z

  Page reload sent to client(s).
^C
  lsl@lsldeMacBook-Pro PenghuaLiuLearningAngularF26 % ng serve
  Initial chunk files | Names         | Raw size
  main.js             | main          | 14.69 kB |
  styles.css          | styles        | 95 bytes |

| Initial total | 14.78 kB

  Application bundle generation complete. [1.651 seconds] - 2026-09-29T15:05:11.704Z

  Watch mode enabled. Watching for file changes...
  NOTE: Raw file sizes do not reflect development server per-request transformations.
➜  Local:   http://localhost:4200/
➜  press h + enter to show help
  Initial chunk files | Names | Raw size
  main.js             | main  | 14.71 kB |

  Application bundle generation complete. [0.473 seconds] - 2026-09-29T15:07:46.892Z

  Page reload sent to client(s).
^C
  lsl@lsldeMacBook-Pro PenghuaLiuLearningAngularF26 % ng serve
  Initial chunk files | Names         | Raw size
  main.js             | main          | 14.71 kB |
  styles.css          | styles        | 95 bytes |

| Initial total | 14.80 kB

  Application bundle generation complete. [1.568 seconds] - 2026-09-29T15:07:57.797Z

  Watch mode enabled. Watching for file changes...
  NOTE: Raw file sizes do not reflect development server per-request transformations.
➜  Local:   http://localhost:4200/
➜  press h + enter to show help
  Initial chunk files | Names | Raw size
  main.js             | main  | 14.84 kB |

  Application bundle generation complete. [0.552 seconds] - 2026-09-29T15:11:36.876Z

  Component update sent to client(s).
  Initial chunk files | Names | Raw size
  main.js             | main  | 14.84 kB |

  Application bundle generation complete. [0.247 seconds] - 2026-09-29T15:13:09.075Z

  Component update sent to client(s).
^C
  lsl@lsldeMacBook-Pro PenghuaLiuLearningAngularF26 % ng serve
  Initial chunk files | Names         | Raw size
  main.js             | main          | 14.84 kB |
  styles.css          | styles        | 95 bytes |

| Initial total | 14.94 kB

  Application bundle generation complete. [1.669 seconds] - 2026-09-29T15:13:27.636Z

  Watch mode enabled. Watching for file changes...
  NOTE: Raw file sizes do not reflect development server per-request transformations.
➜  Local:   http://localhost:4200/
➜  press h + enter to show help
  Initial chunk files | Names | Raw size
  main.js             | main  | 14.87 kB |

  Application bundle generation complete. [0.471 seconds] - 2026-09-29T15:19:29.988Z

  Component update sent to client(s).
^C
  lsl@lsldeMacBook-Pro PenghuaLiuLearningAngularF26 % ng serve
  Initial chunk files | Names         | Raw size
  main.js             | main          | 14.87 kB |
  styles.css          | styles        | 95 bytes |

| Initial total | 14.96 kB

  Application bundle generation complete. [1.683 seconds] - 2026-09-29T15:19:54.629Z

  Watch mode enabled. Watching for file changes...
  NOTE: Raw file sizes do not reflect development server per-request transformations.
➜  Local:   http://localhost:4200/
➜  press h + enter to show help
  Initial chunk files | Names | Raw size
  main.js             | main  | 14.87 kB |

  Application bundle generation complete. [0.443 seconds] - 2026-09-29T15:23:38.465Z

  Component update sent to client(s).
^C
  lsl@lsldeMacBook-Pro PenghuaLiuLearningAngularF26 % ng serve
  Initial chunk files | Names         | Raw size
  main.js             | main          | 14.87 kB |
  styles.css          | styles        | 95 bytes |

| Initial total | 14.97 kB

  Application bundle generation complete. [1.650 seconds] - 2026-09-29T15:23:57.722Z

  Watch mode enabled. Watching for file changes...
  NOTE: Raw file sizes do not reflect development server per-request transformations.
➜  Local:   http://localhost:4200/
➜  press h + enter to show help
  Initial chunk files | Names | Raw size
  main.js             | main  | 14.94 kB |

  Application bundle generation complete. [0.340 seconds] - 2026-09-29T15:26:37.337Z

  Component update sent to client(s).
  Initial chunk files | Names | Raw size
  main.js             | main  | 14.87 kB |

  Application bundle generation complete. [0.158 seconds] - 2026-09-29T15:26:57.964Z

  Component update sent to client(s).
  Initial chunk files | Names | Raw size
  main.js             | main  | 14.89 kB |

  Application bundle generation complete. [0.097 seconds] - 2026-09-29T15:27:04.780Z

  Component update sent to client(s).
  Initial chunk files | Names | Raw size
  main.js             | main  | 15.54 kB |

  Application bundle generation complete. [0.305 seconds] - 2026-09-29T15:28:25.241Z

  Component update sent to client(s).
  Initial chunk files | Names | Raw size
  main.js             | main  | 15.52 kB |

  Application bundle generation complete. [0.218 seconds] - 2026-09-29T15:29:07.309Z

  Component update sent to client(s).
^C
  lsl@lsldeMacBook-Pro PenghuaLiuLearningAngularF26 % ng serve
  Initial chunk files | Names         | Raw size
  main.js             | main          | 15.52 kB |
  styles.css          | styles        | 95 bytes |

| Initial total | 15.62 kB

  Application bundle generation complete. [1.662 seconds] - 2026-09-29T15:29:32.585Z

  Watch mode enabled. Watching for file changes...
  NOTE: Raw file sizes do not reflect development server per-request transformations.
➜  Local:   http://localhost:4200/
➜  press h + enter to show help
  Application bundle generation failed. [0.572 seconds] - 2026-09-29T15:32:38.564Z

✘ [ERROR] NG8002: Can't bind to 'isEven' since it isn't a known property of 'app-book-list-item'.
  1. If 'app-book-list-item' is an Angular component and it has 'isEven' input, then verify that it is included in the '@Component.imports' of this component.
  2. If 'app-book-list-item' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@Component.schemas' of this component to suppress this message.
  3. To allow any property add 'NO_ERRORS_SCHEMA' to the '@Component.schemas' of this component. Find more at https://next.angular.dev/errors/NG8002 [plugin angular-compiler]

    src/app/book-list/book-list.html:5:4:
    5 │     [isEven]="evenRow" />
╵     ~~~~~~~~~~~~~~~~~~

  Error occurs in the template of component BookList.

  src/app/book-list/book-list.ts:11:15:
    11 │   templateUrl: './book-list.html',
╵                ~~~~~~~~~~~~~~~~~~


  Initial chunk files | Names         | Raw size
  main.js             | main          | 15.71 kB |
  styles.css          | styles        | 95 bytes |

| Initial total | 15.80 kB

  Application bundle generation complete. [0.586 seconds] - 2026-09-29T15:35:25.905Z

  Page reload sent to client(s).
  Initial chunk files | Names | Raw size
  main.js             | main  | 15.79 kB |

  Application bundle generation complete. [0.144 seconds] - 2026-09-29T15:35:57.633Z

  Component update sent to client(s).
  Initial chunk files | Names | Raw size
  main.js             | main  | 15.81 kB |

  Application bundle generation complete. [0.295 seconds] - 2026-09-29T15:36:23.767Z

  Component update sent to client(s).
^C
  lsl@lsldeMacBook-Pro PenghuaLiuLearningAngularF26 % ng serve
  Initial chunk files | Names         | Raw size
  main.js             | main          | 15.81 kB |
  styles.css          | styles        | 95 bytes |

| Initial total | 15.90 kB

  Application bundle generation complete. [1.683 seconds] - 2026-09-29T15:36:36.061Z

  Watch mode enabled. Watching for file changes...
  NOTE: Raw file sizes do not reflect development server per-request transformations.
➜  Local:   http://localhost:4200/
➜  press h + enter to show help
  Initial chunk files | Names | Raw size
  main.js             | main  | 16.14 kB |

  Application bundle generation complete. [1.056 seconds] - 2026-09-29T15:45:45.672Z

  Page reload sent to client(s).
  Initial chunk files | Names | Raw size
  main.js             | main  | 16.60 kB |

  Application bundle generation complete. [0.287 seconds] - 2026-09-29T15:46:26.209Z

  Component update sent to client(s).
  Initial chunk files | Names | Raw size
  main.js             | main  | 16.62 kB |

  Application bundle generation complete. [0.187 seconds] - 2026-09-29T15:47:04.634Z

  Component update sent to client(s).
^C
  lsl@lsldeMacBook-Pro PenghuaLiuLearningAngularF26 % ng serve
  Initial chunk files | Names         | Raw size
  main.js             | main          | 16.62 kB |
  styles.css          | styles        | 95 bytes |

| Initial total | 16.71 kB

  Application bundle generation complete. [1.710 seconds] - 2026-09-29T15:48:45.651Z

  Watch mode enabled. Watching for file changes...
  NOTE: Raw file sizes do not reflect development server per-request transformations.
➜  Local:   http://localhost:4200/
➜  press h + enter to show help
^C
  lsl@lsldeMacBook-Pro PenghuaLiuLearningAngularF26 %
  lsl@lsldeMacBook-Pro PenghuaLiuLearningAngularF26 % ng serve
  Initial chunk files | Names         | Raw size
  main.js             | main          | 16.32 kB |
  styles.css          | styles        | 95 bytes |

| Initial total | 16.42 kB

  Application bundle generation complete. [1.838 seconds] - 2026-09-29T16:55:28.864Z

  Watch mode enabled. Watching for file changes...
  NOTE: Raw file sizes do not reflect development server per-request transformations.
➜  Local:   http://localhost:4200/
➜  press h + enter to show help
  Initial chunk files | Names | Raw size
  main.js             | main  | 16.46 kB |

  Application bundle generation complete. [0.298 seconds] - 2026-09-29T16:56:19.178Z

  Component update sent to client(s).
  Initial chunk files | Names | Raw size
  main.js             | main  | 16.46 kB |

  Application bundle generation complete. [0.353 seconds] - 2026-09-29T16:57:10.969Z

  Component update sent to client(s).
  Initial chunk files | Names | Raw size
  main.js             | main  | 16.46 kB |

  Application bundle generation complete. [0.138 seconds] - 2026-09-29T16:58:02.988Z

  Component update sent to client(s).
  Application bundle generation failed. [0.547 seconds] - 2026-09-29T17:04:51.366Z

✘ [ERROR] TS2551: Property 'BookList' does not exist on type 'BookList'. Did you mean 'bookList'? [plugin angular-compiler]

  src/app/book-list/book-list.html:3:14:
    3 │ @for (book of BookList; track book.id; let evenRow = $even) {
╵               ~~~~~~~~

  Error occurs in the template of component BookList.

  src/app/book-list/book-list.ts:11:15:
    11 │   templateUrl: './book-list.html',
╵                ~~~~~~~~~~~~~~~~~~


  Initial chunk files | Names         | Raw size
  main.js             | main          | 16.12 kB |
  styles.css          | styles        | 95 bytes |

| Initial total | 16.21 kB

  Application bundle generation complete. [0.410 seconds] - 2026-09-29T17:08:01.457Z

  Page reload sent to client(s).
  Initial chunk files | Names         | Raw size
  main.js             | main          | 16.12 kB |
  styles.css          | styles        | 95 bytes |

| Initial total | 16.21 kB

  Application bundle generation complete. [0.792 seconds] - 2026-09-29T18:06:56.571Z

  Initial chunk files | Names | Raw size
  main.js             | main  | 16.12 kB |

  Application bundle generation complete. [0.712 seconds] - 2026-09-29T18:12:54.249Z

  Page reload sent to client(s).
  Application bundle generation failed. [0.246 seconds] - 2026-09-29T18:13:07.834Z

✘ [ERROR] TS2307: Cannot find module '../shared/model/book-event' or its corresponding type declarations. [plugin angular-compiler]

  src/app/book-list-item/book-list-item.ts:3:26:
    3 │ import { BookEvent } from '../shared/model/book-event';
        ╵                           ~~~~~~~~~~~~~~~~~~~~~~~~~~~~


  Initial chunk files | Names         | Raw size
main.js             | main          | 16.12 kB |
styles.css          | styles        | 95 bytes |

| Initial total | 16.21 kB

Application bundle generation complete. [0.641 seconds] - 2026-09-29T18:14:07.142Z

Page reload sent to client(s).
  Application bundle generation failed. [0.466 seconds] - 2026-09-29T18:15:10.452Z

✘ [ERROR] TS2304: Cannot find name 'BookEvent'. [plugin angular-compiler]

src/app/book-list/book-list.ts:64:23:
64 │   onChildAction(event: BookEvent) {
╵                        ~~~~~~~~~


    Initial chunk files | Names         | Raw size
  main.js             | main          | 16.12 kB |
  styles.css          | styles        | 95 bytes |

  | Initial total | 16.21 kB

  Application bundle generation complete. [1.079 seconds] - 2026-09-29T18:20:08.283Z

  Page reload sent to client(s).
  ^C
  lsl@lsldeMacBook-Pro PenghuaLiuLearningAngularF26 % git add .
    lsl@lsldeMacBook-Pro PenghuaLiuLearningAngularF26 % git commit -m "Add an image for each book; Give background colour"
    [assignment-3 97beb37] Add an image for each book; Give background colour
  13 files changed, 102 insertions(+), 45 deletions(-)
  create mode 100644 src/app/book-list-item/book-list-item.spec.ts
  create mode 100644 src/app/book-list/book-list.spec.ts
  lsl@lsldeMacBook-Pro PenghuaLiuLearningAngularF26 % ng generate interface shared/models/BookEvent
  CREATE src/app/shared/models/book-event.ts (31 bytes)
  lsl@lsldeMacBook-Pro PenghuaLiuLearningAngularF26 % ng generate interface shared/model/BookEvent
  CREATE src/app/shared/model/book-event.ts (31 bytes)
  lsl@lsldeMacBook-Pro PenghuaLiuLearningAngularF26 % ng serve
  Initial chunk files | Names         | Raw size
  main.js             | main          | 16.12 kB |
  styles.css          | styles        | 95 bytes |

  | Initial total | 16.21 kB

  Application bundle generation complete. [1.911 seconds] - 2026-09-29T18:38:27.917Z

  Watch mode enabled. Watching for file changes...
  NOTE: Raw file sizes do not reflect development server per-request transformations.
  ➜  Local:   http://localhost:4200/
    ➜  press h + enter to show help

  author: "J.R.R. Tolkien",
    category: "Fantasy",
    description: "An epic high-fantasy novel that follows the quest to destroy the One Ring.",
    imageUrl: "https://static.life.com/wp-content/uploads/2022/01/04205402/ian-mckellen-RN7G3D-1024x856.jpg",
  }
];



  onChildAction(event: BookEvent) {
    console.log("Item event received:", event);
}
}
