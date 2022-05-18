import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MovieListCard.scss';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Dropdown from '../Dropdown/Dropdown';
import { useState } from 'react';
import { Movie } from '../../models/Movie';

const dropdownItems = [
  {
    id: 1,
    title: 'Edit',
  },
  {
    id: 2,
    title: 'Delete',
  },
];

function MoviesListCard(props: { movie: Movie }) {
  const movie = props.movie;
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);

  function handleEdit() {
    setIsContextMenuOpen(false);

    // handle edit movie
    console.log('edit selected');
  }

  function handleDelete() {
    setIsContextMenuOpen(false);

    // handle delete movie
    console.log('delete selected');
  }

  function handleMovieSelect() {
    // handle movie select
    console.log('movie selected');
  }

  return (
    <div className="movies-list-card">
      <img className="movies-list-card-image" alt={`${movie.title} poster`} src={movie.poster_path} onClick={() => handleMovieSelect()} />
      <div className="movies-list-card-header">
        <span className="movies-list-card-title" onClick={() => handleMovieSelect()}>
          {movie.title}
        </span>
        <span className="movies-list-card-year">{movie.release_date.slice(0, 4)}</span>
      </div>
      <div className="movies-list-card-genres">
        <span>{movie.genres.join(', ')}</span>
      </div>

      <button onClick={() => setIsContextMenuOpen(true)} className="context-menu-btn">
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </button>

      <div className="movies-list-card-dropdown-wrapper">
        {isContextMenuOpen && (
          <Dropdown
            items={dropdownItems}
            handleSelect={(itemId) => (itemId === 1 ? handleEdit() : handleDelete())}
            handleClose={() => setIsContextMenuOpen(false)}
          />
        )}
      </div>
    </div>
  );
}

export default MoviesListCard;
