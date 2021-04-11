import React from 'react';
import { render, screen } from '@testing-library/react';
import Ratings from './components/Ratings';

test('renders learn react link', () => {
  render(<Ratings />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
