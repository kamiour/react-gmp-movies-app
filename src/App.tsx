import './App.scss';

import Counter from './components/Counter';
import HelloWorld from './components/HelloWorld';
import SearchForm from './components/SearchForm';
import GenreToggle from './components/GenreTogglePanel';
import { genres } from './mocks/genres';

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <hr />

      <Counter />
      <hr />

      <SearchForm />
      <hr />

      <GenreToggle genres={genres} selectedGenreId={genres[1].id} />
    </div>
  );
}

export default App;
