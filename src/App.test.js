import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', ()=> {

  test('renders tic tac toe app', () => {
    render(<App />);
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toBeInTheDocument();
  });

  test('renders tic tac toe app with Board component', () => {
    render(<App />);
    const divElement = screen.getByTestId(/board/i);
    expect(divElement).toBeInTheDocument();
  });
})
