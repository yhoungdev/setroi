import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('hello', () => {
  render(<App />);
  // const linkElement = screen.getByText(/'hello'/i);
  // expect(linkElement).toBeInTheDocument();
});
