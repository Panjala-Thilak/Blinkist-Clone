import React from 'react';
import Menu from './CustomizedMenu'

import { fireEvent, render, screen } from '@testing-library/react'


describe('Explore Menu Test', () => {

    test('renders Explore component', () =>  {
        render(<Menu />);
        const button = screen.getByText('Explore')
        fireEvent.click(button)
        expect(screen.getByText('Politics')).toBeInTheDocument();
    });
  })
