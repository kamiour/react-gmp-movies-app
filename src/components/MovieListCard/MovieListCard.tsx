import React, { useCallback, useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { useSearchParams } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import { Movie } from '../../models/Movie';
import Modal from '../Modal/Modal';
import DeleteMovieConfirm from '../DeleteMovieConfirm/DeleteMovieConfirm';
import { getYear } from '../../utils/getYearFromDate';
import { joinGenres } from '../../utils/joinGenresWithComma';
import { handleImgOnError } from '../../utils/handleImgOnError';
import EditMovieFormik from '../EditMovieFormik/EditMovieFormik';
import './MovieListCard.scss';

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
  const [searchParams, setSearchParams] = useSearchParams();

  const handleEditClicked = useCallback(() => {
    setIsContextMenuOpen(false);
    setMovieToEdit(movie); // triggering modal
  }, [movie]);

  const handleDeleteClicked = useCallback(() => {
    setIsContextMenuOpen(false);
    setMovieToDelete(movie); // triggering modal
  }, [movie]);

  const handleMovieSelect = useCallback(() => {
    searchParams.set('movie', movie.id.toString());
    setSearchParams(searchParams);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [movie.id, searchParams, setSearchParams]);

  const closeEditMovieModal = () => setMovieToEdit(null);
  const closeDeleteMovieModal = () => setMovieToDelete(null);

  const memoizedYear = useMemo(() => getYear(release_date), [release_date]);
  const memoizedGenres = useMemo(() => joinGenres(genres), [genres]);

  const deleteMovieModal = movieToDelete ? (
    <Modal title="Delete movie" handleClose={closeDeleteMovieModal}>
      <DeleteMovieConfirm movieId={movie.id} handleClose={closeDeleteMovieModal} />
    </Modal>
  ) : null;

  const editMovieModal = movieToEdit ? (
    <Modal title="Edit Movie" handleClose={closeEditMovieModal}>
      <EditMovieFormik movie={movieToEdit} handleClose={closeEditMovieModal} />
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
      <button title="context-menu-button" onClick={() => setIsContextMenuOpen(true)} className="context-menu-btn">
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
