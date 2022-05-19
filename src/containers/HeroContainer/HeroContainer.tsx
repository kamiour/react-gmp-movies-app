import AddMovieBtn from '../../components/AddMovieBtn/AddMovieBtn';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Logo from '../../components/Logo/Logo';
import MovieCardSelected from '../../components/MovieCardSelected/MovieCardSelected';
import SearchForm from '../../components/SearchForm/SearchForm';
import { movies } from '../../mocks/movies';

export default function HeroContainer() {
  // logic to get isMovieSelected value
  const isMovieSelected = false;

  // logic to get selectedMovie value
  const selectedMovie = movies[0];

  const heroElement = !isMovieSelected ? (
    <Hero>
      <Header>
        <Logo />
        <AddMovieBtn />
      </Header>

      <SearchForm />
    </Hero>
  ) : (
    <MovieCardSelected movie={selectedMovie} />
  );

  return heroElement;
}
