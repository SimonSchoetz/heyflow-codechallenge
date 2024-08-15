import React from 'react';
import { render, screen } from '@testing-library/react';
import JsonDisplay from './JsonDisplay';
describe('Json Display Component', () => {
  it('should render', () => {
    render(<JsonDisplay />);
    const header = screen.getByText(/JsonDisplay/i);

    expect(header).toBeInTheDocument();
  });
});
