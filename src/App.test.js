import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders open form button', () => {
  render(<App />);
  expect(screen.getByRole('button', { name: /open form/i })).toBeInTheDocument();
});

test('opens modal on button click', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: /open form/i }));
  expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
});