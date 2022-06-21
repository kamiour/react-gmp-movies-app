import styles from './MoviesFound.module.scss';

interface MoviesFoundProps {
  numberOfMovies: number;
}

function MoviesFound({ numberOfMovies }: MoviesFoundProps) {
  return (
    <div className={styles.moviesFound}>
      <span className={styles.moviesFoundValue}>{numberOfMovies}</span> movies found
    </div>
  );
}

export default MoviesFound;
