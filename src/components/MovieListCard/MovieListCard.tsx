import React, { useCallback, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Dropdown from '../Dropdown/Dropdown';
import { Movie } from '../../models/Movie';
import DeleteMovieConfirm from '../DeleteMovieConfirm/DeleteMovieConfirm';
import { getYear } from '../../utils/getYearFromDate';
import { joinGenres } from '../../utils/joinGenresWithComma';
import EditMovieFormik from '../EditMovieFormik/EditMovieFormik';
import { NextImageCustom } from '../NextImageCustom/NextImageCustom';
import styles from './MovieListCard.module.scss';
import dynamic from 'next/dynamic';

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
  const router = useRouter();

  const handleEditClicked = useCallback(() => {
    setIsContextMenuOpen(false);
    setMovieToEdit(movie); // triggering modal
  }, [movie]);

  const handleDeleteClicked = useCallback(() => {
    setIsContextMenuOpen(false);
    setMovieToDelete(movie); // triggering modal
  }, [movie]);

  const handleMovieSelect = useCallback(() => {
    router.query.movie = movie.id.toString();
    router.push(
      {
        pathname: router.pathname,
        query: router.query,
      },
      undefined,
      { shallow: true, scroll: true }
    );
  }, [movie.id, router]);

  const closeEditMovieModal = () => setMovieToEdit(null);
  const closeDeleteMovieModal = () => setMovieToDelete(null);

  const memoizedYear = useMemo(() => getYear(release_date), [release_date]);
  const memoizedGenres = useMemo(() => joinGenres(genres), [genres]);

  const Modal = dynamic(() => import('../../components/Modal/Modal'), { ssr: false });

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
    <div className={styles.moviesListCard}>
      <NextImageCustom
        className={styles.moviesListCardImage}
        alt={`${title} poster`}
        src={poster_path}
        width={300}
        height={500}
        onClick={handleMovieSelect}
      />

      <div className={styles.moviesListCardHeader}>
        <span className={styles.moviesListCardTitle} onClick={handleMovieSelect}>
          {title}
        </span>
        <span className={styles.moviesListCardYear}>{memoizedYear}</span>
      </div>
      <div className={styles.moviesListCardGenres}>
        <span>{memoizedGenres}</span>
      </div>
      <button title="context-menu-button" onClick={() => setIsContextMenuOpen(true)} className={styles.contextMenuBtn}>
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </button>
      <div className={styles.moviesListCardDropdownWrapper}>
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
