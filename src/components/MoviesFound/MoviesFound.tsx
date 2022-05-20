import './MoviesFound.scss';

interface MoviesFoundProps {
  numberOfMovies: number;
}

function MoviesFound({ numberOfMovies }: MoviesFoundProps) {
  return (
    <div className="movies-found">
      <span className="movies-found-value">{numberOfMovies}</span> movies found
    </div>
  );
}

export default MoviesFound;
