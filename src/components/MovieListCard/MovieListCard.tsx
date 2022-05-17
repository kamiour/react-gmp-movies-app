import './MovieListCard.scss';

function MoviesListCard(props: any) {
  const movie = props.movie;

  return (
    <div className="movies-list-card">
      <img className="movies-list-card-image" alt={`${movie.title} poster`} src={movie.poster_path}></img>
      <div className="movies-list-card-header">
        <span>{movie.title}</span>
        <span className="movies-list-card-year">{movie.release_date.slice(0, 4)}</span>
      </div>
      <div className="movies-list-card-genres">
        <span>{movie.genres.join(', ')}</span>
      </div>
    </div>
  );
}

export default MoviesListCard;
