import { useMemo } from 'react';
import { useRouter } from 'next/router';
import FilterPanel from '../../components/FilterPanel/FilterPanel';
import MoviesFound from '../../components/MoviesFound/MoviesFound';
import SortPanel from '../../components/SortPanel/SortPanel';
import { genres } from './genres';
import { sortOptions } from './sortOptions';
import { SelectValue } from '../../models/SelectValue';
import { Genre } from '../../models/Genre';
import { useMovies } from '../../hooks/useMovies';
// import './MoviesListOptionsContainer.scss';

export default function MoviesListOptionsContainer() {
  const { movies } = useMovies();

  const router = useRouter();
  const memoizedGenre = useMemo(() => router.query.genre as string, [router.query.genre]);
  const memoizedSortBy = useMemo(() => router.query.sortBy as string, [router.query.sortBy]);
  const memoizedFetchMoviesNumber = useMemo(() => movies.length, [movies]);

  const handleQueryParamChange = (selectedItem: SelectValue | Genre, paramName: 'genre' | 'sortBy'): void => {
    const selectedValue: string = selectedItem.value;
    console.log(selectedValue);

    if (selectedValue) {
      router.query[paramName] = selectedValue;
    } else {
      delete router.query[paramName];
    }

    router.push(router);
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
