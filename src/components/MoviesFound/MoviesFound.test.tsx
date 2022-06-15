import { render } from '@testing-library/react';
import MoviesFound from './MoviesFound';

describe('MoviesFound', () => {
  it('should have "5 moviees found" in the document', () => {
    const { getByText } = render(<MoviesFound numberOfMovies={5} />);

    const expectedElement = getByText((_, node) => {
      const hasText = (node) => node.textContent === '5 movies found';
      const nodeHasText = hasText(node);
      const childrenDontHaveText = Array.from(node!.children).every((child) => !hasText(child));

      return nodeHasText && childrenDontHaveText;
    });

    expect(expectedElement).toBeInTheDocument();
  });
});
