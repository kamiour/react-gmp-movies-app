import { useEffect } from 'react';

import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import MoviesList from '../../components/MoviesList/MoviesList';
import { RootState } from '../../store';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchMovies } from '../../store/moviesReducer';
import { useAppSelector } from '../../hooks/useAppSelector';

export default function MoviesListContainer() {
  const { fetchedMovies, isLoading, isError, queryParams } = useAppSelector((state: RootState) => state.movies);
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
