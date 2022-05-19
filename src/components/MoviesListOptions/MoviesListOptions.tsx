import { PropsWithChildren } from 'react';

function MoviesListOptions(props: PropsWithChildren<{}>) {
  return <div className="movies-list-options">{props.children}</div>;
}

export default MoviesListOptions;
