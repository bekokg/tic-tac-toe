import { render, screen, cleanup } from '@testing-library/react';
import Square from '../Square';

afterEach(cleanup);

describe('Square component', ()=> {

  test('renders Square component', () => {
    render(<Square />);
    const btnElement = screen.getByTestId(/square/i);
    expect(btnElement).toBeInTheDocument();
  });

  test('renders Square component with prop', () => {
    render(<Square type='X'/>);
    const btnXElement = screen.getByText(/X/i);
    expect(btnXElement).toBeInTheDocument();
  });
})