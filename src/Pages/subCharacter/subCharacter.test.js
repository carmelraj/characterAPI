import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SubCharacter from './SubCharacter';

describe('<SubCharacter />', () => {
  test('it should mount', () => {
    render(<SubCharacter />);
    
    const subCharacter = screen.getByTestId('SubCharacter');

    expect(subCharacter).toBeInTheDocument();
  });
});