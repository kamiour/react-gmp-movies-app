import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { movies } from '../../mocks/movies';
import MovieListCard from './MovieListCard';

function MockModal({ title }) {
  return <div>{title}</div>;
}

jest.mock('../../components/Modal/Modal', () => MockModal);

jest.mock('../../components/EditMovieFormik/EditMovieFormik', () => {
  return () => <div>Mocked Edit Movie Form</div>;
});

jest.mock('../../components/DeleteMovieConfirm/DeleteMovieConfirm', () => {
  return () => <div>Mocked Delete Movie Confirm Form</div>;
});

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('MoviesListCard', () => {
  const movie = movies[0];
  const mockedPush = jest.fn();

  beforeEach(() => {
    useRouter.mockImplementationOnce(() => ({
      pathname: '/search',
      query: { sortBy: 'release_date', genre: 'action' },
      push: mockedPush,
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render a movie list card with provided movie title and image', () => {
    const { getByText, getByAltText } = renderMovieListCard();

    expect(getByText(movie.title)).toBeInTheDocument();
    expect(getByAltText(`${movie.title} poster`)).toBeInTheDocument();
  });

  it('should display dropdown on context menu button click', () => {
    const { getByTitle, getByRole } = renderMovieListCard();

    const contextMenuBtn = getByTitle('context-menu-button');
    expect(contextMenuBtn).toBeInTheDocument();

    userEvent.click(contextMenuBtn);

    const dropdown = getByRole('menu');
    expect(dropdown).toBeInTheDocument();
  });

  it('should set movie query param and trigger scroll to top on movie select', () => {
    const { getByAltText } = renderMovieListCard();

    // clicking on movie card image
    const movieImg = getByAltText(`${movie.title} poster`);
    expect(movieImg).toBeInTheDocument();
    userEvent.click(movieImg);

    expect(mockedPush).toHaveBeenCalledWith(
      {
        pathname: `/search`,
        query: {
          sortBy: 'release_date',
          genre: 'action',
          movie: movie.id.toString(),
        },
      },
      undefined,
      { shallow: true, scroll: true }
    );
  });

  function renderMovieListCard() {
    return render(<MovieListCard movie={movie} />);
  }
});
