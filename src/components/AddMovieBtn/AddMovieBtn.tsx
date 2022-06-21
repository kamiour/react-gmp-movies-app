import styles from './AddMovieBtn.module.scss';

interface AddMovieBtnProps {
  handleClick: () => void;
}

function AddMovieBtn({ handleClick }: AddMovieBtnProps) {
  return (
    <button className={styles.addMovieBtn} onClick={handleClick}>
      + Add Movie
    </button>
  );
}

export default AddMovieBtn;
