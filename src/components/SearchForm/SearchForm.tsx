import React, { useState } from 'react';
import './SearchForm.scss';

export default function SearchForm() {
  const [searchValue, setSearchValue] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert('SearchValue: ' + searchValue);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
  }

  return (
    <div className="searchform-wrapper">
      <h1 className="searchform-title">Find your movie</h1>

      <form className="searchform" onSubmit={handleSubmit}>
        <input
          className="searchform-input"
          type="text"
          value={searchValue}
          onChange={handleChange}
          placeholder="What do you want to watch?"
        />
        <button className="searchform-btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
