import './MoviesListOptions.scss';

function MoviesListOptions(props: any) {
  return (
    <div className="movies-list-options">{props.children}</div>
  );
}

export default MoviesListOptions;
