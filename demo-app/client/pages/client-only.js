import { App } from '../components/App';
import { Message } from '../components/Message';
import { Books } from '../containers/Books';

export default function ClientOnlyPage(props) {
  return (
    <App>
      Client Rendered: <Message />
      <Books />
    </App>
  );
}
