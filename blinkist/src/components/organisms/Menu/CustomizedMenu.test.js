import React from 'react';
import Menu from './CustomizedMenu';

import { cleanup, fireEvent, render, screen } from '@testing-library/react';

afterEach(cleanup);

describe('Explore Menu Test', () => {

    const onChange=jest.fn;

    test('renders Explore component', () =>  {
        render(<Menu parentMenuFunction={onChange}/>);
        const button = screen.getByText('Explore');
        fireEvent.click(button);
        expect(screen.getByText('Politics')).toBeInTheDocument();
        fireEvent.click(screen.getByText('Politics'));
        fireEvent.click(screen.getByText('Entrepreneurship'));
        fireEvent.click(screen.getByText('Science'));
        fireEvent.click(screen.getByText('Education'));
        fireEvent.click(screen.getByText('Economics'));
        fireEvent.click(screen.getByText('Motivation'));
        fireEvent.click(screen.getByText('Health'));
        fireEvent.click(screen.getByText('Communcation skills'));
        fireEvent.click(screen.getByText('Relationships'));
    });    
  });
