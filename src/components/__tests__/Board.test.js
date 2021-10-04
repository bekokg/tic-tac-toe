import { render, screen } from '@testing-library/react';
import Board from '../Board';

test('renders Board component', () => {
  render(<Board />);
  const divElement = screen.getByTestId(/board/i);
  expect(divElement).toBeInTheDocument();
});