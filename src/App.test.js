import { render, screen } from '@testing-library/react';
import AppFacebook from './App';

test('renders learn react link', () => {
  render(<AppFacebook />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
