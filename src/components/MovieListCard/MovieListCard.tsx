import React, { useCallback, useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import Dropdown from '../Dropdown/Dropdown';
import { Movie } from '../../models/Movie';
import Modal from '../Modal/Modal';
import DeleteMovieConfirm from '../DeleteMovieConfirm/DeleteMovieConfirm';
import EditMovieForm from '../EditMovieForm/EditMovieForm';
import { getYear } from '../../utils/getYearFromDate';
import { joinGenres } from '../../utils/joinGenresWithComma';
import { EditMovieFormValue } from '../../models/EditMovieFormValue';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setSelectedMovie } from '../../store/moviesReducer';
import './MovieListCard.scss';
import { handleImgOnError } from '../../utils/handleImgOnError';

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

  const dispatch = useAppDispatch();

  const handleEditClicked = useCallback(() => {
    setIsContextMenuOpen(false);
    setMovieToEdit(movie); // triggering modal
  }, [movie]);

  const handleDeleteClicked = useCallback(() => {
    setIsContextMenuOpen(false);
    setMovieToDelete(movie); // triggering modal
  }, [movie]);

  const handleMovieSelect = useCallback(() => {
    dispatch(setSelectedMovie(movie));
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [movie, dispatch]);

  const handleMovieDelete = useCallback(() => {
    // delete request
    alert('Delete movie: ' + movieToDelete!.id);
    setMovieToDelete(null);
  }, [movieToDelete]);

  const handleMovieEdit = useCallback((formValue: EditMovieFormValue) => {
    // edit request
    console.log(formValue);
  }, []);

  const closeEditMovieModal = useCallback(() => setMovieToEdit(null), []);
  const closeDeleteMovieModal = useCallback(() => setMovieToDelete(null), []);

  const memoizedYear = useMemo(() => getYear(release_date), [release_date]);
  const memoizedGenres = useMemo(() => joinGenres(genres), [genres]);

  const deleteMovieModal = movieToDelete ? (
    <Modal title="Delete movie" handleClose={closeDeleteMovieModal}>
      <DeleteMovieConfirm handleConfirm={handleMovieDelete} />
    </Modal>
  ) : null;

  const editMovieModal = movieToEdit ? (
    <Modal title="Add Movie" handleClose={closeEditMovieModal}>
      <EditMovieForm movie={movieToEdit} onSubmit={handleMovieEdit} />
    </Modal>
  ) : null;

  return (
    <div className="movies-list-card">
      <img
        className="movies-list-card-image"
        alt={`${title} poster`}
        src={poster_path}
        onClick={handleMovieSelect}
        onError={handleImgOnError}
      />
      <div className="movies-list-card-header">
        <span className="movies-list-card-title" onClick={handleMovieSelect}>
          {title}
        </span>
        <span className="movies-list-card-year">{memoizedYear}</span>
      </div>
      <div className="movies-list-card-genres">
        <span>{memoizedGenres}</span>
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

export default React.memo(MoviesListCard);
