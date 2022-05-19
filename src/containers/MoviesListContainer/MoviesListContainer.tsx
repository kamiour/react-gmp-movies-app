import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import MoviesList from '../../components/MoviesList/MoviesList';
import { movies } from '../../mocks/movies';

export default function MoviesListContainer() {
  // movies will be fetched here

  return (
    <ErrorBoundary componentName="MoviesListContainer">
      <MoviesList movies={movies}></MoviesList>
    </ErrorBoundary>
  );
}
