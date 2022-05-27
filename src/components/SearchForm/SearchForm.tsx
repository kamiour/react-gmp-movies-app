import React, { useContext, useId, useState } from 'react';
import { FetchedMoviesContext } from '../../App';
import './SearchForm.scss';

export default function SearchForm() {
  const [searchValue, setSearchValue] = useState('');
  const [{ queryParams: currentQueryParams }, setQueryParams] = useContext(FetchedMoviesContext);
  const inputIdPrefix = useId();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setQueryParams({
      ...currentQueryParams,
      searchValue,
    });
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
        <button className="app-btn searchform-btn" type="submit" disabled={!searchValue}>
          Search
        </button>
      </form>
    </div>
  );
}
