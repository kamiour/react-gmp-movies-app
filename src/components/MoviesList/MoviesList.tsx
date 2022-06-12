import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import MoviesListCard from '../MovieListCard/MovieListCard';
import { Movie } from '../../models/Movie';
import React from 'react';
import styles from './MoviesList.module.scss';

interface MoviesListProps {
  movies: Movie[];
}

function MoviesList({ movies }: MoviesListProps) {
  return (
    <ul className={styles.moviesList}>
      {movies.map((movie: Movie) => (
        <li key={movie.id}>
          <ErrorBoundary componentName="MoviesListCard">
            <MoviesListCard movie={movie} />
          </ErrorBoundary>
        </li>
      ))}
    </ul>
  );
}

export default React.memo(MoviesList);
