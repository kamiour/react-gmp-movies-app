import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MovieCardSelected.scss';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Logo from '../Logo/Logo';
import { transformDuration } from '../../utils/transformDuration';
import { Movie } from '../../models/Movie';

function MovieCardSelected(props: { movie: Movie }) {
  const movie = props.movie;

  function handleGoToSearch() {
    console.log('go to search');
    // handle go to searchs
  }

  return (
    <div className="movie-card-selected">
      <div className="movie-card-selected-header">
        <Logo />

        <button onClick={() => handleGoToSearch()} className="movie-card-selected-search-btn">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      <div className="movie-card-selected-body">
        <img className="movie-card-selected-image" alt={`${movie.title} poster`} src={movie.poster_path} />

        <div className="movie-card-selected-content">
          <div className="movie-card-selected-content-header">
            <span className="movie-card-selected-title">{movie.title}</span>
            <span className="movie-card-selected-rating">{movie.vote_average}</span>
          </div>
          <div className="movie-card-selected-genres">
            <span>{movie.genres.join(', ')}</span>
          </div>
          <div className="movie-card-selected-info">
            <span>{movie.release_date.slice(0, 4)}</span>
            <span>{transformDuration(movie.runtime)}</span>
          </div>
          <div className="movie-card-selected-overview">{movie.overview}</div>
        </div>
      </div>
    </div>
  );
}

export default MovieCardSelected;
