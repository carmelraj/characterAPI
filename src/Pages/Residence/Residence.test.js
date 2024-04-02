import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Residence from './Residence';

describe('<Residence />', () => {
  test('it should mount', () => {
    render(<Residence />);
    
    const residence = screen.getByTestId('Residence');

    expect(residence).toBeInTheDocument();
  });
});