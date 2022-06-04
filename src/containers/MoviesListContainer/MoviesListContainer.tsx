import { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import MoviesList from '../../components/MoviesList/MoviesList';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useMovies } from '../../hooks/useMovies';
import { fetchMovies } from '../../store/moviesReducer';
import { initialQueryParams } from '../../store/utils/initialQueryParams';

export default function MoviesListContainer() {
  const { movies, isLoading, isError } = useMovies();
  const dispatch = useAppDispatch();

  const { searchQuery } = useParams();
  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get('sortBy') ?? null;
  const filter = searchParams.get('genre') ?? null;

  useEffect(() => {
    dispatch(
      fetchMovies({
        ...initialQueryParams,
        sortBy,
        search: searchQuery ?? null,
        filter,
      })
    );
  }, [searchQuery, sortBy, filter, dispatch]);

  const content = isError ? (
    <h1>Fetching Error!</h1>
  ) : (
    <ErrorBoundary componentName="MoviesListContainer">
      <MoviesList movies={movies}></MoviesList>
    </ErrorBoundary>
  );

  return isLoading ? <h2>Loading...</h2> : content;
}
