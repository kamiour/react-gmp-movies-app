import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MovieListCard.scss';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Dropdown from '../Dropdown/Dropdown';
import { useState } from 'react';
import { Movie } from '../../models/Movie';
import Modal from '../Modal/Modal';
import DeleteMovieConfirm from '../DeleteMovieConfirm/DeleteMovieConfirm';
import EditMovieForm from '../EditMovieForm/EditMovieForm';

interface MoviesListCardProps {
  movie: Movie;
}

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

function MoviesListCard({ movie }: MoviesListCardProps) {
  const { title, poster_path, release_date, genres } = movie;
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
  const [movieToDelete, setMovieToDelete] = useState<Movie | null>(null);
  const [movieToEdit, setMovieToEdit] = useState<Movie | null>(null);

  function handleEditClicked() {
    setIsContextMenuOpen(false);
    setMovieToEdit(movie); // triggering modal
  }

  function handleDeleteClicked() {
    setIsContextMenuOpen(false);
    setMovieToDelete(movie); // triggering modal
  }

  function handleMovieSelect() {
    // handle movie select
    console.log('movie selected');
  }

  function handleMovieDelete() {
    // delete request
    setMovieToDelete(null);
    alert('Delete movie: ' + movieToDelete!.id);
  }

  function handleMovieEdit(formValue: Partial<Movie>) {
    // edit request
    console.log(formValue);
  }

  const deleteMovieModal = movieToDelete ? (
    <Modal title="Delete movie" handleClose={() => setMovieToDelete(null)}>
      <DeleteMovieConfirm handleConfirm={handleMovieDelete} />
    </Modal>
  ) : null;

  const editMovieModal = movieToEdit ? (
    <Modal title="Add Movie" handleClose={() => setMovieToEdit(null)}>
      <EditMovieForm movie={movieToEdit} onSubmit={handleMovieEdit} />
    </Modal>
  ) : null;

  return (
    <div className="movies-list-card">
      <img className="movies-list-card-image" alt={`${title} poster`} src={poster_path} onClick={() => handleMovieSelect()} />
      <div className="movies-list-card-header">
        <span className="movies-list-card-title" onClick={() => handleMovieSelect()}>
          {title}
        </span>
        <span className="movies-list-card-year">{release_date.slice(0, 4)}</span>
      </div>
      <div className="movies-list-card-genres">
        <span>{genres.join(', ')}</span>
      </div>

      <button onClick={() => setIsContextMenuOpen(true)} className="context-menu-btn">
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </button>

      <div className="movies-list-card-dropdown-wrapper">
        {isContextMenuOpen && (
          <Dropdown
            items={dropdownItems}
            handleSelect={(itemId) => (itemId === 1 ? handleEditClicked() : handleDeleteClicked())}
            handleClose={() => setIsContextMenuOpen(false)}
          />
        )}
      </div>

      {deleteMovieModal}
      {editMovieModal}
    </div>
  );
}

export default MoviesListCard;
