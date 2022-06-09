import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import MoviesListCard from '../MovieListCard/MovieListCard';
import { Movie } from '../../models/Movie';
import React from 'react';
// import './MoviesList.scss';

interface MoviesListProps {
  movies: Movie[];
}

function MoviesList({ movies }: MoviesListProps) {
  return (
    <ul className="movies-list">
      {movies.map((movie: Movie) => (
        <li key={movie.id} className="movies-list-item">
          <ErrorBoundary componentName="MoviesListCard">
            <MoviesListCard movie={movie} />
          </ErrorBoundary>
        </li>
      ))}
    </ul>
  );
}

export default React.memo(MoviesList);
