import { useEffect } from 'react';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import MoviesList from '../../components/MoviesList/MoviesList';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useMovies } from '../../hooks/useMovies';
import { useQueryParams } from '../../hooks/useQueryParams';
import { fetchMovies } from '../../store/moviesReducer';

export default function MoviesListContainer() {
  const dispatch = useAppDispatch();
  const { movies, isLoading, isError } = useMovies();
  const routerQueryParams = useQueryParams();

  useEffect(() => {
    dispatch(fetchMovies(routerQueryParams));
  }, [routerQueryParams, dispatch]);

  const content = isError ? (
    <h1>Fetching Error!</h1>
  ) : (
    <ErrorBoundary componentName="MoviesListContainer">
      <MoviesList movies={movies}></MoviesList>
    </ErrorBoundary>
  );

  return isLoading ? <h2>Loading...</h2> : content;
}
