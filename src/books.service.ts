import { Injectable } from '@nestjs/common';
import { Book } from './books.model';

@Injectable()
export class BooksService {
  private readonly books: Book[] = [
    new Book('LIV01', 'Book TDD and BDD in practice', 29.9),
    new Book('LIV02', 'Book Beginner with Flutter', 39.9),
    new Book('LIV03', 'AI as a service', 29.9),
  ];

  getAll(): Book[] {
    return this.books;
  }

  getOne(id: number): Book {
      return this.books[0];
  }

  create(Book: Book) {
    this.books.push(Book);
  }

  update(Book: Book): Book {
      return Book;
  }

  delete(id: number) {
      this.books.pop();
  }
}
