export type Author = {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
};

export type NewAuthor = Omit<Author, 'id'>;
