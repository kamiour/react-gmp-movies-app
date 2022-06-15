import { render } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('should have Header in the document', () => {
    const { getByText } = render(<Header>Header</Header>);
    expect(getByText('Header')).toBeInTheDocument();
  });
});
