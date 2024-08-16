import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import JsonDisplay from './JsonDisplay';

describe('Json Display Component', () => {
  it('should render display the input data', () => {
    const testObj = { test: 'json' };

    render(<JsonDisplay setKey={console.log} data={testObj} />);
    const key = screen.getByText(/test/i);
    const value = screen.getByText(/json/i);

    expect(key).toBeInTheDocument();
    expect(value).toBeInTheDocument();
  });
  it('should render key as button', () => {
    const testObj = { test: 'json' };

    render(<JsonDisplay setKey={console.log} data={testObj} />);
    const key = screen.getByText(/test/i);
    const value = screen.getByText(/json/i);
    expect(key).toHaveAttribute('type', 'button');
    expect(value).not.toHaveAttribute('type', 'button');
  });

  it('should function should be called with accessKey when clicked', () => {
    const mockSetKey = jest.fn();

    const testObj = { test: 'json' };

    render(<JsonDisplay setKey={mockSetKey} data={testObj} />);
    const key = screen.getByText(/test/i);
    fireEvent.click(key);
    expect(mockSetKey).toHaveBeenCalledWith('test');
  });
});
