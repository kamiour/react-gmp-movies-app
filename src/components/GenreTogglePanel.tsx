import React from 'react';
import './GenreTogglePanel.scss';
import GenreToggleButton from './GenreToggleButton';

interface Genre {
  id: string;
  title: string;
}

interface GenreToggleProps {
  genres: Genre[];
  selectedGenreId: string;
}

interface GenreToggleState {
  selectedGenreId: string;
}

export default class GenreTogglePanel extends React.Component<GenreToggleProps, GenreToggleState> {
  constructor(props: GenreToggleProps) {
    super(props);

    this.state = {
      selectedGenreId: this.props.selectedGenreId,
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(id: string): void {
    this.setState({
      selectedGenreId: id,
    });
  }

  render() {
    return (
      <>
        <h3>Genre Toggle (Class component):</h3>

        <div className="genre-panel">
          {this.props.genres.map((genre: Genre) => {
            return (
              <GenreToggleButton
                key={genre.id}
                genreId={genre.id}
                isSelected={genre.id === this.state.selectedGenreId}
                genreTitle={genre.title}
                handleSelect={this.handleSelect}
              />
            );
          })}
        </div>
      </>
    );
  }
}
