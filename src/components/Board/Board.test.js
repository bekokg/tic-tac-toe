import { render, screen } from '@testing-library/react';
import Board from './Board';

test('renders tic tac toe app', () => {
  render(<Board />);
  const divElement = screen.getByTestId(/board/i);
  expect(divElement).toBeInTheDocument();
});