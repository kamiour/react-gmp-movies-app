import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import MoviesListCard from '../MovieListCard/MovieListCard';
import { Movie } from '../../models/Movie';
import './MoviesList.scss';
import React from 'react';

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
