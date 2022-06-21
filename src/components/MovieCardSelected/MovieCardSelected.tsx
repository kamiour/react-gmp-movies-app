import React, { useMemo } from 'react';
import { transformDuration } from '../../utils/transformDuration';
import { Movie } from '../../models/Movie';
import { getYear } from '../../utils/getYearFromDate';
import { joinGenres } from '../../utils/joinGenresWithComma';
import { NextImageCustom } from '../NextImageCustom/NextImageCustom';
import styles from './MovieCardSelected.module.scss';

interface MovieCardSelectedProps {
  movie: Movie;
}

function MovieCardSelected({ movie }: MovieCardSelectedProps) {
  const { title, poster_path, vote_average, genres, release_date, runtime, overview } = movie;

  const memoizedYear = useMemo(() => getYear(release_date), [release_date]);
  const memoizedGenres = useMemo(() => joinGenres(genres), [genres]);
  const memoizedDuration = useMemo(() => transformDuration(runtime), [runtime]);

  return (
    <div className={styles.movieCardSelected}>
      <div className={styles.imageContainer}>
        <NextImageCustom className={styles.movieCardSelectedImage} alt={`${title} poster`} src={poster_path} width={320} height={480} />
      </div>

      <div className={styles.movieCardSelectedContent}>
        <div className={styles.movieCardSelectedContentHeader}>
          <span className={styles.movieCardSelectedTitle}>{title}</span>
          <span className={styles.movieCardSelectedRating}>{vote_average}</span>
        </div>
        <div className={styles.movieCardSelectedGenres}>
          <span>{memoizedGenres}</span>
        </div>
        <div className={styles.movieCardSelectedInfo}>
          <span>{memoizedYear}</span>
          <span>{memoizedDuration}</span>
        </div>
        <div className={styles.movieCardSelectedOverview}>{overview}</div>
      </div>
    </div>
  );
}

export default React.memo(MovieCardSelected);
