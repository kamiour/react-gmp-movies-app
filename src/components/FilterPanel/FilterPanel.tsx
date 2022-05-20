import './FilterPanel.scss';
import GenreToggleButton from '../GenreToggleButton/GenreToggleButton';
import { Genre } from '../../models/Genre';

interface GenreToggleProps {
  genres: Genre[];
  selectedGenreId: string;
  handleSelect: (value: React.SetStateAction<Genre>) => void;
}

export default function GenreTogglePanel({ genres, selectedGenreId, handleSelect }: GenreToggleProps) {
  return (
    <div className="genre-panel">
      {genres.map(({ id, title }: Genre) => {
        return (
          <GenreToggleButton
            key={id}
            isSelected={id === selectedGenreId}
            genreTitle={title}
            handleSelect={() => handleSelect({ title, id })}
          />
        );
      })}
    </div>
  );
}
