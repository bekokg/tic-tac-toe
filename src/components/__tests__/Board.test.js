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

  it('should disable square with value', ()=> {
    render(<Board />);
    const btnX = screen.getByTestId(/square-0/i);
    fireEvent.click(btnX)
    expect(btnX).toBeDisabled()
  })

  it('should show winner message', ()=> {
    render(<Board />);
    const messageEl = screen.getByTestId(/message/i);
    const btnX1 = screen.getByTestId(/square-0/i);
    const btnO5 = screen.getByTestId(/square-4/i);
    const btnX3 = screen.getByTestId(/square-2/i);
    const btnO7 = screen.getByTestId(/square-6/i);
    const btnX2 = screen.getByTestId(/square-1/i);
    fireEvent.click(btnX1);
    fireEvent.click(btnO5);
    fireEvent.click(btnX2);
    fireEvent.click(btnO7);
    fireEvent.click(btnX3);
    expect(messageEl).toHaveTextContent("Player X won")
  });

  it('should show Tie message if no winner', ()=> {
    render(<Board />);
    const messageEl = screen.getByTestId(/message/i);
    const btnX1 = screen.getByTestId(/square-0/i);
    const btnO5 = screen.getByTestId(/square-4/i);
    const btnX3 = screen.getByTestId(/square-2/i);
    const btnO7 = screen.getByTestId(/square-6/i);
    const btnO2 = screen.getByTestId(/square-1/i);
    const btnO4 = screen.getByTestId(/square-3/i);
    const btnX6 = screen.getByTestId(/square-5/i);
    const btnO9 = screen.getByTestId(/square-8/i);
    const btnX8 = screen.getByTestId(/square-7/i);
    fireEvent.click(btnX1);
    fireEvent.click(btnO5);
    fireEvent.click(btnO7);
    fireEvent.click(btnX3);
    fireEvent.click(btnO2);
    fireEvent.click(btnO4);
    fireEvent.click(btnX6);
    fireEvent.click(btnO9);
    fireEvent.click(btnX8);
    expect(messageEl).toHaveTextContent("It's a Tie")
  });

  it('should disable all squares if game is over', ()=> {
    render(<Board />);
    const squareBtns = screen.getAllByTestId(/square/i);
    const btnX1 = screen.getByTestId(/square-0/i);
    const btnO5 = screen.getByTestId(/square-4/i);
    const btnX3 = screen.getByTestId(/square-2/i);
    const btnO7 = screen.getByTestId(/square-6/i);
    const btnX2 = screen.getByTestId(/square-1/i);
    fireEvent.click(btnX1);
    fireEvent.click(btnO5);
    fireEvent.click(btnX2);
    fireEvent.click(btnO7);
    fireEvent.click(btnX3);
    squareBtns.forEach(btn => expect(btn).toBeDisabled())
  })

});