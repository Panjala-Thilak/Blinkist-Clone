import React from 'react';
import Button from './CustomButton'

import { fireEvent, render, screen} from '@testing-library/react'


describe('App', () => {
    test('check the buttom name', () => {
      const {getByTestId}=render(<Button label="Click Me"/>)
      const name = getByTestId('button')
      expect(name.textContent).toBe('Click Me')
    })
  })

  describe('checking the button click', () => {
    const handleClick = jest.fn();
   
    it('Checking the click',() => {

    const {getByTestId} = render(<Button
            onClick={handleClick}
        />)
        expect(getByTestId("button")).toBeTruthy();
    });

    it('checking the function call',() => {
       render(<Button
        label='Add Book'
            onClick={handleClick}
        />)
        fireEvent.click(screen.getByText(/Add Book/i))
        expect(handleClick).toHaveBeenCalledTimes(1);
    })
});