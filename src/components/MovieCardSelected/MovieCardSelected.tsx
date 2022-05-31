import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MovieCardSelected.scss';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Logo from '../Logo/Logo';
import { transformDuration } from '../../utils/transformDuration';
import { Movie } from '../../models/Movie';
import { useCallback, useContext, useMemo } from 'react';
import { getYear } from '../../utils/getYearFromDate';
import { joinGenres } from '../../utils/joinGenresWithComma';
import React from 'react';
import { SelectedMovieContext } from '../../contexts/SelectedMovieContext';

interface MovieCardSelectedProps {
  movie: Movie;
}

function MovieCardSelected({ movie }: MovieCardSelectedProps) {
  const { title, poster_path, vote_average, genres, release_date, runtime, overview } = movie;
  const { setSelectedMovie } = useContext(SelectedMovieContext);

  const handleGoToSearch = useCallback(() => setSelectedMovie(null), [setSelectedMovie]);

  const memoizedYear = useMemo(() => getYear(release_date), [release_date]);
  const memoizedGenres = useMemo(() => joinGenres(genres), [genres]);
  const memoizedDuration = useMemo(() => transformDuration(runtime), [runtime]);

  return (
    <div className="movie-card-selected">
      <div className="movie-card-selected-header">
        <Logo />

        <button onClick={handleGoToSearch} className="movie-card-selected-search-btn">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      <div className="movie-card-selected-body">
        <img className="movie-card-selected-image" alt={`${title} poster`} src={poster_path} />

        <div className="movie-card-selected-content">
          <div className="movie-card-selected-content-header">
            <span className="movie-card-selected-title">{title}</span>
            <span className="movie-card-selected-rating">{vote_average}</span>
          </div>
          <div className="movie-card-selected-genres">
            <span>{memoizedGenres}</span>
          </div>
          <div className="movie-card-selected-info">
            <span>{memoizedYear}</span>
            <span>{memoizedDuration}</span>
          </div>
          <div className="movie-card-selected-overview">{overview}</div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(MovieCardSelected);
