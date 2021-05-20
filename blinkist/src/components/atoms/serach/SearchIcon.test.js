import React from 'react';
import SearchIcon from './SearchIcon'

import { fireEvent, render } from '@testing-library/react'


describe('Search Icon', () => {

    const handleClick = jest.fn();
   
    it('Checking the click',() => {

    const {getByTestId} = render(<SearchIcon
            onClick={handleClick}
        />)
        expect(getByTestId("search")).toBeTruthy();
    });

    it('checking the function call',() => {
        const { getByTestId }=render(<SearchIcon
            onClick={handleClick}
        />)

        const searchElement=getByTestId('search');

        fireEvent.click(searchElement)
        expect(handleClick).toHaveBeenCalledTimes(1);
    })
});