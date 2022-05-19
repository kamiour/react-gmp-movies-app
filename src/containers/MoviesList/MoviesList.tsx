import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import MoviesListCard from '../../components/MovieListCard/MovieListCard';
import { Movie } from '../../models/Movie';
import './MoviesList.scss';

function MoviesList(props: { movies: Movie[] }) {
  return (
    <ul className="movies-list">
      {props.movies.map((movie: Movie) => (
        <li key={movie.id} className="movies-list-item">
          <ErrorBoundary componentName="MoviesListCard">
            <MoviesListCard movie={movie} />
          </ErrorBoundary>
        </li>
      ))}
    </ul>
  );
}

export default MoviesList;
