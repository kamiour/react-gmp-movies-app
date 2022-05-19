import './MoviesFound.scss';

interface MoviesFoundProps {
  numberOfMovies: number;
}

function MoviesFound(props: MoviesFoundProps) {
  const { numberOfMovies } = props;

  return (
    <div className="movies-found">
      <span className="movies-found-value">{numberOfMovies}</span> movies found
    </div>
  );
}

export default MoviesFound;
