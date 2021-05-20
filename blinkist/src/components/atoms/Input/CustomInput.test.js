import React from 'react'
import Input from './CustomInput';
import { fireEvent, render } from '@testing-library/react'




describe('checking the textfield', () => {
    const handleChange = jest.fn();

    it('Checking the input value',() => {

        const {container} = render(<Input
            onChange={handleChange} value={''}/>)
            const input = container.querySelector("input");
            fireEvent.change(input, {target: {value: 'value'}}) 
            expect(handleChange).toHaveBeenCalledTimes(1);
        });


    test("Checking the placeholder in input", () => {
        const {getByPlaceholderText} = render(<Input placeholder='Enter your Name'/>)
        getByPlaceholderText('Enter your Name')

    });
})