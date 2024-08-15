import React from 'react';
import { render, screen } from '@testing-library/react';
import JsonDisplay from './JsonDisplay';
describe('Json Display Component', () => {
  it('should render display the input data', () => {
    const testObj = { test: 'json' };
    console.log('first', JSON.stringify(testObj));

    render(<JsonDisplay data={testObj} />);
    const key = screen.getByText(/test/i);
    const value = screen.getByText(/json/i);

    expect(key).toBeInTheDocument();
    expect(value).toBeInTheDocument();
  });
});
