import { render, screen, cleanup } from '@testing-library/react';
import Board from '../Board';

afterEach(cleanup);

describe('Board component', ()=> {

  it('renders Board component', () => {
    render(<Board />);
    const divElement = screen.getByTestId(/board/i);
    expect(divElement).toBeInTheDocument();
  });

  it('renders Board component', () => {
    render(<Board />);
    const divElement = screen.getByTestId(/board/i);
    expect(divElement).toBeInTheDocument();
  });

  it('renders Board component with correct number of Square component', () => {
    render(<Board />);
    const squareBtns = screen.getAllByTestId(/square/i);
    expect(squareBtns).toEqual(Array(9).fill(null).length);
  });

});