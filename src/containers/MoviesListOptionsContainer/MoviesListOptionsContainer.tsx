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
import styles from './MoviesListOptionsContainer.module.scss';

export default function MoviesListOptionsContainer() {
  const { movies } = useMovies();

  const router = useRouter();
  const memoizedGenre = useMemo(() => router.query.genre as string, [router.query.genre]);
  const memoizedSortBy = useMemo(() => router.query.sortBy as string, [router.query.sortBy]);
  const memoizedFetchMoviesNumber = useMemo(() => movies.length, [movies]);

  const handleQueryParamChange = (selectedItem: SelectValue | Genre, paramName: 'genre' | 'sortBy'): void => {
    const selectedValue: string = selectedItem.value;

    if (selectedValue) {
      router.query[paramName] = selectedValue;
    } else {
      delete router.query[paramName];
    }

    router.push(
      {
        pathname: router.pathname,
        query: router.query,
      },
      undefined,
      { shallow: true }
    );
  };

  const getSortByValue = (value: string | null): SelectValue | null => {
    if (!value) {
      return null;
    }

    return sortOptions.find((option) => option.value === value)!;
  };

  return (
    <>
      <div className={styles.optionsPanel}>
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
