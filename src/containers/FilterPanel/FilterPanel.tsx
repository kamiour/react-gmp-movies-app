import { useState } from 'react';
import './FilterPanel.scss';
import GenreToggleButton from '../../components/GenreToggleButton/GenreToggleButton';

interface Genre {
  id: string;
  title: string;
}

interface GenreToggleProps {
  genres: Genre[];
  selectedGenreId: string;
}

export default function GenreTogglePanel(props: GenreToggleProps) {
  const [selectedGenreId, setSelectedGenreId] = useState(props.selectedGenreId);

  function handleSelect(id: string): void {
    setSelectedGenreId(id);
  }

  return (
    <div className="genre-panel">
      {props.genres.map((genre: Genre) => {
        return (
          <GenreToggleButton
            key={genre.id}
            genreId={genre.id}
            isSelected={genre.id === selectedGenreId}
            genreTitle={genre.title}
            handleSelect={handleSelect}
          />
        );
      })}
    </div>
  );
}
