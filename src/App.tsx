import './App.scss';

import { genres } from './mocks/genres';

import SearchForm from './components/SearchForm/SearchForm';
import GenreTogglePanel from './containers/GenreTogglePanel/GenreTogglePanel';
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

function App() {
  return (
    <div className="App">
      <Hero>
        <Header>
          <Logo />
          <AddMovieBtn />
        </Header>

        <SearchForm />
      </Hero>

      <Main>
        <MoviesListOptions>
          <OptionsPanel>
            <GenreTogglePanel genres={genres} selectedGenreId={genres[1].id} />
            <div>sort by: release date</div>
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
