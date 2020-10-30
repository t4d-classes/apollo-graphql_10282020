import { BaseAPI } from './BaseAPI';

import { Book, NewBook } from '../models/books';

export class BooksAPI extends BaseAPI {
  constructor(baseUrl: string) {
    super(baseUrl, 'books');
  }

  async all() {
    const books = await this.get<Book[]>(this.collectionUrl());
    return books;
  }

  async oneById(bookId: number) {
    const books = await this.get<Book>(this.memberUrl(bookId));
    return books;
  }

  async allByAuthorId(authorId: number) {
    const books = await this.get<Book[]>(
      this.collectionUrl() +
        '?authorId=' +
        encodeURIComponent(String(authorId)),
    );
    return books;
  }

  async append(book: NewBook) {
    return await this.post<Book>(this.collectionUrl(), book);
  }

  async replace(book: Book) {
    await this.put<Book>(this.memberUrl(book.id), book);
    const updatedBook = await this.oneById(book.id);
    return updatedBook;
  }

  async remove(bookId: number) {
    const deletedBook = await this.oneById(bookId);
    await this.delete<Book>(this.memberUrl(bookId));
    return deletedBook;
  }
}
