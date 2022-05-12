import './GenreToggleButton.scss';

interface GenreButtonProps {
  genreId: string;
  genreTitle: string;
  isSelected: boolean;
  handleSelect: (id: string) => void;
}

export default function GenreToggleButton(props: GenreButtonProps) {
  return (
    <button className={`genre-button ${props.isSelected ? 'selected' : ''}`} onClick={() => props.handleSelect(props.genreId)}>
      {props.genreTitle}
    </button>
  );
}
