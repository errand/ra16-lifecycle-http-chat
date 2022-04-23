import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders Cart title', () => {
  render(<App />);
  const linkElement = screen.getByTestId(/test/i);
  expect(linkElement).toBeInTheDocument();
});
