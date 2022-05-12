import React from 'react';
import './SearchForm.scss';

interface SearchFormInterface {
  searchValue: string;
}

export default class SearchForm extends React.Component<{}, SearchFormInterface> {
  constructor(props: {}) {
    super(props);
    this.state = { searchValue: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ searchValue: event.target.value });
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert('SearchValue: ' + this.state.searchValue);
  }

  render() {
    return (
      <>
        <h3>SearchForm (Class component):</h3>

        <form className="searchform" onSubmit={this.handleSubmit}>
          <input
            className="searchform-input"
            type="text"
            value={this.state.searchValue}
            onChange={this.handleChange}
            placeholder="What do you want to watch?"
          />
          <button className="searchform-btn" type="submit">
            Search
          </button>
        </form>
      </>
    );
  }
}
