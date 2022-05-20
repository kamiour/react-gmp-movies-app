import { useState } from 'react';
import FilterPanel from '../../components/FilterPanel/FilterPanel';
import MoviesFound from '../../components/MoviesFound/MoviesFound';
import SortPanel from '../../components/SortPanel/SortPanel';
import { genres } from '../../mocks/genres';
import { sortOptions } from '../../mocks/sortOptions';
import { Genre } from '../../models/Genre';
import { SelectValue } from '../../models/SelectValue';
import './MoviesListOptionsContainer.scss';

export default function MoviesListOptionsContainer() {
  const [genresToFilter, setGenresToFilter] = useState(genres); // add logic to get genres from server
  const [selectedGenre, setSelectedGenre] = useState(genres[1]); // add logic to get selectedGenre from server

  const [optionsToSortBy, setSortOptions] = useState(sortOptions); // add logic to get options from server
  const [sortBy, setSortBy] = useState({ value: 'release_date', label: 'Release Date' }); // add logic to get sortBy value from server

  const [numberOfMoviesFound, setNumberOfMoviesFound] = useState(39); // add logic to get number from server

  function handleGenreChange(value: React.SetStateAction<Genre>) {
    setSelectedGenre(value);
    // trigger movies fetch
  }

  function handleSortBychange(value: React.SetStateAction<SelectValue>) {
    setSortBy(value);
    // trigger movies fetch
  }

  return (
    <>
      <div className="options-panel">
        <FilterPanel genres={genresToFilter} selectedGenreId={selectedGenre.id} handleSelect={handleGenreChange} />
        <SortPanel sortOptions={optionsToSortBy} sortByValue={sortBy} handleSelect={handleSortBychange} />
      </div>

      <MoviesFound numberOfMovies={numberOfMoviesFound} />
    </>
  );
}
