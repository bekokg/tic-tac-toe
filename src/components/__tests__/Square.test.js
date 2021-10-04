import { render, screen } from '@testing-library/react';
import Square from '../Square';

test('renders Board component', () => {
  render(<Square />);
  const btnElement = screen.getByTestId(/square/i);
  expect(btnElement).toBeInTheDocument();
});