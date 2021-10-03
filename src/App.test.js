import { render, screen } from '@testing-library/react';
import App from './App';

test('renders tic tac toe app', () => {
  render(<App />);
  const divElement = screen.getByText(/Tic Tac Toe/i);
  expect(divElement).toBeInTheDocument();
});
