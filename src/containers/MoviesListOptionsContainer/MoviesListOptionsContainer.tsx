import { useMemo } from 'react';

import FilterPanel from '../../components/FilterPanel/FilterPanel';
import MoviesFound from '../../components/MoviesFound/MoviesFound';
import SortPanel from '../../components/SortPanel/SortPanel';
import { genres } from './genres';
import { sortOptions } from './sortOptions';
import { SelectValue } from '../../models/SelectValue';
import { Genre } from '../../models/Genre';
import { setFilter, setSortBy } from '../../store/moviesReducer';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useMovies } from '../../hooks/useMovies';
import './MoviesListOptionsContainer.scss';

export default function MoviesListOptionsContainer() {
  const { fetchedMovies, queryParams } = useMovies();
  const dispatch = useAppDispatch();

  const handleGenreChange = (genre: Genre): void => {
    dispatch(setFilter(genre.value));
  };

  const handleSortBychange = (selectValue: SelectValue): void => {
    dispatch(setSortBy(selectValue.value));
  };

  const getSortByValue = (value: string): SelectValue => {
    return sortOptions.find((option) => option.value === value)!;
  };

  const memoizedFetchMoviesNumber = useMemo(() => fetchedMovies.length, [fetchedMovies]);

  return (
    <>
      <div className="options-panel">
        <FilterPanel genres={genres} selectedGenre={queryParams.filter} handleSelect={handleGenreChange} />
        <SortPanel sortOptions={sortOptions} sortByValue={getSortByValue(queryParams.sortBy)} handleSelect={handleSortBychange} />
      </div>

      <MoviesFound numberOfMovies={memoizedFetchMoviesNumber} />
    </>
  );
}
