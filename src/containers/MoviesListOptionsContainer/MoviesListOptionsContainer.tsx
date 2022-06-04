import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import FilterPanel from '../../components/FilterPanel/FilterPanel';
import MoviesFound from '../../components/MoviesFound/MoviesFound';
import SortPanel from '../../components/SortPanel/SortPanel';
import { genres } from './genres';
import { sortOptions } from './sortOptions';
import { SelectValue } from '../../models/SelectValue';
import { Genre } from '../../models/Genre';
import { useMovies } from '../../hooks/useMovies';
import './MoviesListOptionsContainer.scss';

export default function MoviesListOptionsContainer() {
  const { movies } = useMovies();
  const [searchParams, setSearchParams] = useSearchParams();

  const memoizedGenre = useMemo(() => searchParams.get('genre'), [searchParams]);
  const memoizedSortBy = useMemo(() => searchParams.get('sortBy'), [searchParams]);
  const memoizedFetchMoviesNumber = useMemo(() => movies.length, [movies]);

  const handleQueryParamChange = (selectedItem: SelectValue | Genre, paramName: 'genre' | 'sortBy'): void => {
    const selectedValue: string = selectedItem.value;

    if (selectedValue) {
      searchParams.set(paramName, selectedValue);
    } else {
      searchParams.delete(paramName);
    }

    setSearchParams(searchParams);
  };

  const getSortByValue = (value: string | null): SelectValue | null => {
    if (!value) {
      return null;
    }

    return sortOptions.find((option) => option.value === value)!;
  };

  return (
    <>
      <div className="options-panel">
        <FilterPanel
          genres={genres}
          selectedGenre={memoizedGenre}
          handleSelect={(selectedItem) => handleQueryParamChange(selectedItem, 'genre')}
        />
        <SortPanel
          sortOptions={sortOptions}
          sortByValue={getSortByValue(memoizedSortBy)}
          handleSelect={(selectedItem) => handleQueryParamChange(selectedItem, 'sortBy')}
        />
      </div>

      <MoviesFound numberOfMovies={memoizedFetchMoviesNumber} />
    </>
  );
}
