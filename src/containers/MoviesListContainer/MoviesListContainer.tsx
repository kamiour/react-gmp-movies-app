import { useEffect } from 'react';

import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import MoviesList from '../../components/MoviesList/MoviesList';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useMovies } from '../../hooks/useMovies';
import { fetchMovies } from '../../store/moviesReducer';

export default function MoviesListContainer() {
  const { fetchedMovies, isLoading, isError, queryParams } = useMovies();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies(queryParams));
  }, [queryParams, dispatch]);

  const content = isError ? (
    <h1>Fetching Error!</h1>
  ) : (
    <ErrorBoundary componentName="MoviesListContainer">
      <MoviesList movies={fetchedMovies}></MoviesList>
    </ErrorBoundary>
  );

  return isLoading ? <h2>Loading...</h2> : content;
}
