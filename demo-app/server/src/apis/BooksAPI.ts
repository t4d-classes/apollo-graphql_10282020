import { BaseAPI } from './BaseAPI';

import { Book } from '../models/books';

export class BooksAPI extends BaseAPI {
  constructor(baseUrl: string) {
    super(baseUrl, 'books');
  }

  async all() {
    const books = await this.get<Book[]>(this.collectionUrl());
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
}
