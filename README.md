# PenghuaLiuLearningAngularF26

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.1.8.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## API

This project uses the Open Library API to get Christian books.

API Documentation:
https://openlibrary.org/dev/docs/api/search

Example Request:
https://openlibrary.org/search.json?q=Christian+spiritual+growth&limit=20

I chose HttpClient, because my API returns book inside a docs array, I need to extract and convert them into my book model.

It also uses RxJS operators like map() to process API data. I don't need to change my existed add, edit or delete methods as well.

All adding, editing and deleting method change my local data only. Once page being refreshed, changes disappear since the books are imported from OpenLibrary API again. 


## Lazy Loading
The sizes of files are shown as followings:
1. Before lazy loading
   Initial chunk files | Names         |  Raw size | Estimated transfer size
   main-PBCJTUQA.js    | main          | 321.26 kB |                85.34 kB
   styles-5INURTSO.css | styles        |   0 bytes |                 0 bytes

                    | Initial total | 321.26 kB |                85.34 kB

Application bundle generation complete. [2.955 seconds] - 2026-11-17T12:15:16.814Z

Output location: /Users/lsl/Documents/JS FrameWorks - Mathew/PenghuaLiuLearningAngularF26/dist/PenghuaLiuLearningAngularF26

2. After lazy loading
   Initial chunk files | Names         |  Raw size | Estimated transfer size
   chunk-5UQ5A7XE.js   | -             | 164.79 kB |                48.74 kB
   chunk-WXO4VGXI.js   | -             | 104.97 kB |                27.27 kB
   main-NBFJUPTL.js    | main          |   8.44 kB |                 2.81 kB
   styles-5INURTSO.css | styles        |   0 bytes |                 0 bytes

                    | Initial total | 278.20 kB |                78.82 kB

Lazy chunk files    | Names         |  Raw size | Estimated transfer size
chunk-72FMSJXQ.js   | book-form     |  45.05 kB |                10.14 kB
chunk-SRN252XW.js   | book-detail   | 979 bytes |               979 bytes

Application bundle generation complete. [2.480 seconds] - 2026-11-17T12:39:48.240Z

Output location: /Users/lsl/Documents/JS FrameWorks - Mathew/PenghuaLiuLearningAngularF26/dist/PenghuaLiuLearningAngularF26

The changes show:
1. Lazy chunk files  appears after setting the lazy loading
2. The size of initial chunk files dropped from 321.26kB to 278.20 kB.
