import React from 'react'
import { render, screen } from '@testing-library/react'
import CustomForm from './CustomForm'

describe('The Form Testing', () => {

    it('Checking The Add Book Title', () => {
        render(<CustomForm/>);
        expect(screen.getByText('Add Book')).toBeInTheDocument();
    })

    it('Checking The Form Elements', () => {
        render(<CustomForm/>);
        expect(screen.getByText('Title')).toBeInTheDocument();
        expect(screen.getByText('Author')).toBeInTheDocument();
        expect(screen.getByText('Time')).toBeInTheDocument();
    })
})