import React from 'react';
import Button from './TabButtons'

import { cleanup, fireEvent, render, screen } from '@testing-library/react'

afterEach(cleanup)

describe('App', () => {
    test('check the buttom name', () => {
      const {getByTestId}=render(<Button name="Click Me"/>)
      const name = getByTestId('tabButton')
      expect(name.textContent).toBe('Click Me')
    })
})

describe('checking the button click', () => {
    const handleClick = jest.fn();
   
    it('Checking the click',() => {

    const {getByTestId} = render(<Button
            onClick={handleClick}
        />)
        expect(getByTestId("tabButton")).toBeTruthy();
    });

    it('checking the function call',() => {
       render(<Button
        name='Click'
            onClick={handleClick}
        />)
        fireEvent.click(screen.getByText(/Click/i))
        expect(handleClick).toHaveBeenCalledTimes(1);
    })
});