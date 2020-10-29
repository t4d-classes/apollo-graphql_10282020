export type Book = {
  id: number;
  title: string;
  isbn: string;
  authorId: number;
  category: string;
  price: number;
  quantity: number;
};

export type NewBook = Omit<Book, 'id'>;
