import React from 'react';
import { render, screen } from '@testing-library/react';
import JsonInput from './JsonInput';

describe('Json Display Component', () => {
  it('should have an input field', () => {
    render(<JsonInput setKey={console.log} currentKey={''} />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });
});
