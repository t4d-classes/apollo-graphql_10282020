import { gql, useQuery, useMutation } from '@apollo/client';
import { ErrorMessage } from './ErrorMessage';
import { useForm } from '../hooks/useForm';

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

export const APPEND_AUTHOR_MUTATION = gql`
  mutation AppendAuthor($author: NewAuthor!) {
    appendAuthor(author: $author) {
      id
      firstName
      lastName
    }
  }
`;

export function Message() {
  const { data, loading, error } = useQuery<AppQuery>(APP_QUERY);
  const [mutateAppendAuthor] = useMutation(APPEND_AUTHOR_MUTATION);

  const [authorForm, change, resetAuthorForm] = useForm({
    firstName: '',
    lastName: '',
    phoneNumber: '',
  });

  const appendAuthor = () => {
    mutateAppendAuthor({
      variables: {
        author: authorForm,
      },
      refetchQueries: [{ query: APP_QUERY }],
    });
  };

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
      <form>
        <div>
          <label htmlFor="author-firstname-input">First Name:</label>
          <input
            type="text"
            name="firstName"
            id="author-firstname-input"
            value={authorForm.firstName}
            onChange={change}
          />
        </div>
        <div>
          <label htmlFor="author-lastname-input">Last Name:</label>
          <input
            type="text"
            name="lastName"
            id="author-lastname-input"
            value={authorForm.lastName}
            onChange={change}
          />
        </div>
        <div>
          <label htmlFor="author-phonenumber-input">Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            id="author-phonenumber-input"
            value={authorForm.phoneNumber}
            onChange={change}
          />
        </div>
        <button type="button" onClick={appendAuthor}>
          Add Author
        </button>
      </form>
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
