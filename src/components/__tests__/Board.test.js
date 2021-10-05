import { render, screen, cleanup } from '@testing-library/react';
import Board from '../Board';

afterEach(cleanup);

test('renders Board component', () => {
  render(<Board />);
  const divElement = screen.getByTestId(/board/i);
  expect(divElement).toBeInTheDocument();
});