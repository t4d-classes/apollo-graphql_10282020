import { BaseAPI } from './BaseAPI';

import { Author, NewAuthor } from '../models/authors';

export class AuthorsAPI extends BaseAPI {
  constructor(baseUrl: string) {
    super(baseUrl, 'authors');
  }

  async all() {
    const authors = await this.get<Author[]>(this.collectionUrl());
    return authors;
  }

  async oneById(authorId: number) {
    const author = await this.get<Author>(this.memberUrl(authorId));
    return author;
  }

  async oneByPhoneNumber(phoneNumber: string) {
    const authors = await this.get<Author[]>(
      this.collectionUrl() + '?phoneNumber=' + encodeURIComponent(phoneNumber),
    );
    return authors[0];
  }

  async append(author: NewAuthor) {
    return await this.post<Author>(this.collectionUrl(), author);
  }
}
