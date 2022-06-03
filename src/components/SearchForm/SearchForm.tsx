import React, { useId, useState } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useMovies } from '../../hooks/useMovies';
import { setSearch } from '../../store/moviesReducer';

import './SearchForm.scss';

export default function SearchForm() {
  const { queryParams } = useMovies();
  const [searchValue, setSearchValue] = useState(queryParams.search);

  const dispatch = useAppDispatch();

  const inputIdPrefix = useId();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setSearch(searchValue));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="searchform-wrapper">
      <h1 className="searchform-title">Find your movie</h1>

      <form className="searchform" onSubmit={handleSubmit}>
        <input
          id={`${inputIdPrefix}_searchInput`}
          className="searchform-input form-input"
          type="text"
          value={searchValue}
          onChange={handleChange}
          placeholder="What do you want to watch?"
        />
        <button className="app-btn searchform-btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
