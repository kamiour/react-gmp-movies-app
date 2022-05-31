import './App.scss';

import Logo from './components/Logo/Logo';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import MoviesListContainer from './containers/MoviesListContainer/MoviesListContainer';
import HeroContainer from './containers/HeroContainer/HeroContainer';
import MoviesListOptionsContainer from './containers/MoviesListOptionsContainer/MoviesListOptionsContainer';
import { useState } from 'react';
import { Movie } from './models/Movie';
import { useFetchMovies, UseFetchMoviesResult } from './hooks/useFetchMovies';
import { FetchedMoviesContext } from './contexts/FetchedMoviesContext';
import { SelectedMovieState, SelectedMovieContext } from './contexts/SelectedMovieContext';

function App() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const selectedMovieContextValue: SelectedMovieState = { selectedMovie, setSelectedMovie };

  const fetchedMoviesContextValue: UseFetchMoviesResult = useFetchMovies();

  return (
    <div className="App">
      <SelectedMovieContext.Provider value={selectedMovieContextValue}>
        <FetchedMoviesContext.Provider value={fetchedMoviesContextValue}>
          <HeroContainer />

          <Main>
            <MoviesListOptionsContainer />
            <MoviesListContainer />
          </Main>
        </FetchedMoviesContext.Provider>
      </SelectedMovieContext.Provider>

      <Footer>
        <Logo />
      </Footer>
    </div>
  );
}

export default App;
