import './AddMovieBtn.scss';

interface AddMovieBtnProps {
  handleClick: () => void;
}

function AddMovieBtn({ handleClick }: AddMovieBtnProps) {
  return (
    <button className="add-movie-btn" onClick={handleClick}>
      + Add Movie
    </button>
  );
}

export default AddMovieBtn;
