import React, { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useSearchParams } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { Movie } from '../../models/Movie';
import MovieCardSelected from '../MovieCardSelected/MovieCardSelected';
import './MovieCardSelectedContainer.scss';

interface MovieCardSelectedContainerProps {
  movie: Movie | null;
  isLoading: boolean;
  isError: boolean;
}

function MovieCardSelectedContainer({ movie, isLoading, isError }: MovieCardSelectedContainerProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleGoToSearch = useCallback(() => {
    searchParams.delete('movie');
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams]);

  return (
    <div className="movie-card-selected-container">
      <div className="movie-card-selected-container-header">
        <Logo />

        <button onClick={handleGoToSearch} className="movie-card-selected-search-btn">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      {isLoading && <h2>Loading...</h2>}
      {isError && <h1>Fetching Error!</h1>}
      {!isLoading && !isError && movie && <MovieCardSelected movie={movie} />}
    </div>
  );
}

export default React.memo(MovieCardSelectedContainer);
