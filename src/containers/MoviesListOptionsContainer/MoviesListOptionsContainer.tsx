import FilterPanel from '../../components/FilterPanel/FilterPanel';
import MoviesFound from '../../components/MoviesFound/MoviesFound';
import OptionsPanel from '../../components/OptionsPanel/OptionsPanel';
import SortPanel from '../../components/SortPanel/SortPanel';
import { genres } from '../../mocks/genres';

export default function MoviesListOptionsContainer() {
  const genresToFilter = genres; // add logic to get
  const selectedGenre = genres[1]; // add logic to get

  const sortBy = { value: 'release_date', label: 'Release Date' }; // add logic to get

  const numberOfMoviesFound = 39; // add logic to get

  return (
    <>
      <OptionsPanel>
        <FilterPanel genres={genresToFilter} selectedGenreId={selectedGenre.id} />
        <SortPanel sortByValue={sortBy} />
      </OptionsPanel>

      <MoviesFound numberOfMovies={numberOfMoviesFound} />
    </>
  );
}
