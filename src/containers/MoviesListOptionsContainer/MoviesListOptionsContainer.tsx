import { useMemo } from 'react';

import FilterPanel from '../../components/FilterPanel/FilterPanel';
import MoviesFound from '../../components/MoviesFound/MoviesFound';
import SortPanel from '../../components/SortPanel/SortPanel';

import { genres } from './genres';
import { sortOptions } from './sortOptions';

import { SelectValue } from '../../models/SelectValue';
import { Genre } from '../../models/Genre';

import { RootState } from '../../store';
import { setFilter, setSortBy } from '../../store/moviesReducer';

import './MoviesListOptionsContainer.scss';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';

export default function MoviesListOptionsContainer() {
  const { fetchedMovies, queryParams } = useAppSelector((state: RootState) => state.movies);
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
