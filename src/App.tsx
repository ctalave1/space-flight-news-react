import { useAtom } from 'jotai';

import { Header } from './components/Header';
import { queryAtom } from './atoms';

const App = () => {
  const [query, _] = useAtom(queryAtom);
  return (
    <>
      <Header />
      <h1>Search query: {query}</h1>
    </>
  );
}

export default App
