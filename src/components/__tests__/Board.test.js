import { render, screen, cleanup, fireEvent } from '@testing-library/react';
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
    expect(squareBtns.length).toEqual(9);
  });

  it('can click on button to show X and O squares', () => {
    render(<Board />);
    const btnX = screen.getByTestId(/square-0/i);
    fireEvent.click(btnX)
    expect(screen.queryAllByText('X').length).toBe(1);
    const btnO = screen.getByTestId(/square-1/i);
    fireEvent.click(btnO)
    expect(screen.queryAllByText('O').length).toBe(1);
  });

  it('should show X player turn message by default', ()=> {
    render(<Board />);
    const messageEl = screen.getByTestId(/message/i);
    expect(messageEl).toHaveTextContent("X player's turn")
  })

  it('should show O player turn message on click', ()=> {
    render(<Board />);
    const messageEl = screen.getByTestId(/message/i);
    const btnX = screen.getByTestId(/square-0/i);
    fireEvent.click(btnX)
    expect(messageEl).toHaveTextContent("O player's turn")
  })

  it('should render reset button', ()=> {
    render(<Board />);
    expect(screen.getByText(/reset/i))
  })

  it('can click on reset button to restart the game', ()=> {
    render(<Board />);
    const btnX = screen.getByTestId(/square-0/i);
    fireEvent.click(btnX)
    expect(screen.queryAllByText('X').length).toBe(1);
    const btnO = screen.getByTestId(/square-1/i);
    fireEvent.click(btnO)
    expect(screen.queryAllByText('O').length).toBe(1);
    const resetBtn = screen.getByText(/reset/i)
    fireEvent.click(resetBtn);
    expect(screen.queryAllByText('X').length).toBe(0);
    expect(screen.queryAllByText('O').length).toBe(0);
  });

  it('should render Rewind button', ()=> {
    render(<Board />);
    expect(screen.getByText(/rewind/i))
  });

  it('can click on Rewind button to rewind', ()=> {
    render(<Board />);
    const btnX = screen.getByTestId(/square-0/i);
    fireEvent.click(btnX)
    expect(screen.queryAllByText('X').length).toBe(1);
    const btnO = screen.getByTestId(/square-1/i);
    fireEvent.click(btnO)
    expect(screen.queryAllByText('O').length).toBe(1);
    const rewindBtn = screen.getByText(/rewind/i)
    fireEvent.click(rewindBtn);
    expect(screen.queryAllByText('X').length).toBe(1);
    expect(screen.queryAllByText('O').length).toBe(0);
  });

});