import { render, screen, cleanup } from '@testing-library/react';
import Square from '../Square';

afterEach(cleanup);

describe('Square component', ()=> {

  it('renders Square component', () => {
    render(<Square />);
    const btnElement = screen.getByTestId(/square/i);
    expect(btnElement).toBeInTheDocument();
  });

  it('renders Square component with prop', () => {
    render(<Square type='X'/>);
    const btnXElement = screen.getByText(/X/i);
    expect(btnXElement).toBeInTheDocument();
  });

  it('can click on button', () => {
    render(<Square onClick={jest.fn()}/>);
    const btnElement = screen.getByTestId(/square/i);
    fireEvent.click(btnElement)
    expect(btnXElement).toHaveBeenCalledTimes(1);
  });

})