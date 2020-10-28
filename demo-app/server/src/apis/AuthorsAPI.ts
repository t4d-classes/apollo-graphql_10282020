import { freemem } from 'os';
import { BaseAPI } from './BaseAPI';

import { Author } from '../models/authors';

export class AuthorsAPI extends BaseAPI {
  constructor(baseUrl: string) {
    super(baseUrl, 'authors');
  }

  async all() {
    const authors = await this.get<Author[]>(this.collectionUrl());
    return authors;
  }
}
