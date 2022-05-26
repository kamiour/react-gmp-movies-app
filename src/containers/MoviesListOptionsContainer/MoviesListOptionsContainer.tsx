import { useContext, useMemo, useState } from 'react';
import { FetchedMoviesContext } from '../../App';
import FilterPanel from '../../components/FilterPanel/FilterPanel';
import MoviesFound from '../../components/MoviesFound/MoviesFound';
import SortPanel from '../../components/SortPanel/SortPanel';
import { genres } from '../../mocks/genres';
import { sortOptions } from '../../mocks/sortOptions';
import { SelectValue } from '../../models/SelectValue';
import './MoviesListOptionsContainer.scss';

export default function MoviesListOptionsContainer() {
  const [genresToFilter, setGenresToFilter] = useState(genres); // add logic to get genres from server
  const [selectedGenre, setSelectedGenre] = useState(genres[0]); // add logic to get selectedGenre from server

  const [optionsToSortBy, setSortOptions] = useState(sortOptions); // add logic to get options from server
  const [sortBy, setSortBy] = useState<SelectValue | null>(null); // add logic to get sortBy value from server

  const [{ fetchedMovies, queryParams: currentQueryParams }, setQueryParams] = useContext(FetchedMoviesContext);

  const handleGenreChange = (value: string) => {
    setSelectedGenre(value);
    setQueryParams({ ...currentQueryParams, genre: value });
  };

  const handleSortBychange = (selectValue: SelectValue) => {
    setSortBy(selectValue);
    setQueryParams({ ...currentQueryParams, sort: selectValue.value });
  };

  const memoizedFetchMoviesNumber = useMemo(() => fetchedMovies.length, [fetchedMovies]);

  return (
    <>
      <div className="options-panel">
        <FilterPanel genres={genresToFilter} selectedGenre={selectedGenre} handleSelect={handleGenreChange} />
        <SortPanel sortOptions={optionsToSortBy} sortByValue={sortBy} handleSelect={handleSortBychange} />
      </div>

      <MoviesFound numberOfMovies={memoizedFetchMoviesNumber} />
    </>
  );
}
