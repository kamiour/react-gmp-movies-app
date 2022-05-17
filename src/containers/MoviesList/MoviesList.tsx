import MoviesListCard from '../../components/MovieListCard/MovieListCard';
import './MoviesList.scss';

function MoviesList(props: any) {
  return (
    <ul className="movies-list">
      {props.movies.map((movie) => (
        <li key={movie.id} className="movies-list-item">
          <MoviesListCard movie={movie} />
        </li>
      ))}
    </ul>
  );
}

export default MoviesList;
