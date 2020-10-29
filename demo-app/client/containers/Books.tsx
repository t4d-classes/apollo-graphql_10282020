import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { ErrorMessage } from '../components/ErrorMessage';

import { BooksTable } from '../components/BooksTable';

import { BooksContainer as BooksContainerQuery } from './__generated__/BooksContainer';

export const BOOKS_CONTAINER_QUERY = gql`
  query BooksContainer {
    ...BooksFragment
  }
  ${BooksTable.fragments.books}
`;

export const Books = () => {
  const { data, loading, error } = useQuery<BooksContainerQuery>(
    BOOKS_CONTAINER_QUERY,
  );

  if (error) return <ErrorMessage message="Error loading books." />;
  if (loading) return <div>Loading Books...</div>;

  return (
    <section>
      <BooksTable books={data.books} />
      <style jsx>{`
        section {
          padding: 20px;
        }
        p {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </section>
  );
};
