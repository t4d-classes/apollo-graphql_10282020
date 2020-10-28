import { gql, useQuery } from '@apollo/client';
import { ErrorMessage } from './ErrorMessage';

export type AppQueryAuthor = {
  id: number;
  firstName: string;
  lastName: string;
};

export type AppQuery = {
  message: string;
  authors: AppQueryAuthor[];
};

export const APP_QUERY = gql`
  query App {
    message
    authors {
      id
      firstName
      lastName
    }
  }
`;

export function Message() {
  const { data, loading, error } = useQuery<AppQuery>(APP_QUERY);

  if (error) return <ErrorMessage message="Error loading posts." />;
  if (loading) return <div>Loading</div>;

  const { message, authors } = data;

  return (
    <section>
      <p>{message}</p>
      <ul>
        {authors.map((a) => (
          <li key={a.id}>
            {a.firstName} {a.lastName}
          </li>
        ))}
      </ul>
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
}
