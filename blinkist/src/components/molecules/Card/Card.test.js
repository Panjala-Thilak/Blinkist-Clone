import React from 'react'
import { render,fireEvent, screen } from '@testing-library/react'
import BookCard from './MediaCard'

describe('The BookCard Testing', () => {
    const handleClick = jest.fn();

    it('Checking The title', () => {
        render(<BookCard
        buttonName="+Add To Library"
        title="Ramayana"
        author="Valmiki"  
        category="Mythology"
        time="500"
        onClick={handleClick}
        visible={true} />)
    
    expect(screen.getByText('Ramayana')).toBeInTheDocument();
    expect(screen.getByText('Valmiki')).toBeInTheDocument();
    expect(screen.getByText('Mythology')).toBeInTheDocument();
    expect(screen.getByText('500 minute read')).toBeInTheDocument();
    })

    it('checking the function call',() => {
        render(<BookCard
            buttonName="Finished"
            title="Book Name"
            author="Poet"  
            category="Read"
            time="24"
            onClick={handleClick}
            visible={true} />)

         fireEvent.click(screen.getByText(/Finished/i))
         expect(handleClick).toHaveBeenCalledTimes(1);
     })
})