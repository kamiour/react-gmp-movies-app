// import './GenreToggleButton.scss';

interface GenreButtonProps {
  genreTitle: string;
  isSelected: boolean;
  handleSelect: () => void;
}

export default function GenreToggleButton({ isSelected, handleSelect, genreTitle }: GenreButtonProps) {
  return (
    <button className={`genre-button ${isSelected ? 'selected' : ''}`} onClick={handleSelect}>
      {genreTitle}
    </button>
  );
}
