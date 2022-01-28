import { render, screen } from '@testing-library/react';
import App from './App';

test('renders candies', () => {
  render(<App />);
  const linkElement = screen.getByText(/candies/i);
  expect(linkElement).toBeInTheDocument();
});
