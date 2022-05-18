import './App.scss';

import { genres } from './mocks/genres';

import SearchForm from './components/SearchForm/SearchForm';
import FilterPanel from './containers/FilterPanel/FilterPanel';
import Logo from './components/Logo/Logo';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AddMovieBtn from './components/AddMovieBtn/AddMovieBtn';
import Hero from './components/Hero/Hero';
import OptionsPanel from './components/OptionsPanel/OptionsPanel';
import MoviesFound from './components/MoviesFound/MoviesFound';
import MoviesListOptions from './components/MoviesListOptions/MoviesListOptions';
import MoviesList from './containers/MoviesList/MoviesList';
import Main from './components/Main/Main';
import { movies } from './mocks/movies';
import MovieCardSelected from './components/MovieCardSelected/MovieCardSelected';
import SortPanel from './containers/SortPanel/SortPanel';

function App() {
  const isMovieSelected = false;

  return (
    <div className="App">
      {!isMovieSelected && (
        <Hero>
          <Header>
            <Logo />
            <AddMovieBtn />
          </Header>

          <SearchForm />
        </Hero>
      )}

      {isMovieSelected && <MovieCardSelected movie={movies[0]} />}

      <Main>
        <MoviesListOptions>
          <OptionsPanel>
            <FilterPanel genres={genres} selectedGenreId={genres[1].id} />
            <SortPanel />
          </OptionsPanel>

          <MoviesFound />
        </MoviesListOptions>

        <MoviesList movies={movies}></MoviesList>
      </Main>

      <Footer>
        <Logo></Logo>
      </Footer>
    </div>
  );
}

export default App;
