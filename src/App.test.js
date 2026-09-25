import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Little Lemon heading', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', { name: /Little Lemon/i, level: 1 });
  expect(headingElement).toBeInTheDocument();
});