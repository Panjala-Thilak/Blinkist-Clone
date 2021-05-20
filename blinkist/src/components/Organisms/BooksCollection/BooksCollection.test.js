import React from 'react'
import { render, screen } from '@testing-library/react'
import BooksCollection from './BooksCollection'

let allBooks=[
    {
      "id": 1,
      "title": "Steve Jobs",
      "author": "Walter Isaacson",
      "time": "20",
      "category": "Entrepreneurship",
      "image": "https://images.blinkist.com/images/books/608a9c296cee070007228a21/1_1/470.jpg",
      "status": true
    },
    {
      "id": 3,
      "title": "The Bully Pulpit",
      "author": "Goodwin",
      "time": "19",
      "category": "Politics",
      "image": "https://images.blinkist.com/images/books/608aa9b16cee070007228a70/1_1/250.jpg",
      "status": false
    },
    {
      "id": 7,
      "title": "The Pegan Diet",
      "author": "Dr. Mark Hyman",
      "time": "15",
      "category": "Health",
      "image": "https://images.blinkist.com/images/books/607d9d2c6cee070007991263/1_1/470.jpg",
      "status": true
    },
    ]
let allLibraryBooks=[
      {
        "id": 7,
        "title": "The Pegan Diet",
        "author": "Dr. Mark Hyman",
        "time": "15",
        "category": "Health",
        "image": "https://images.blinkist.com/images/books/607d9d2c6cee070007991263/1_1/470.jpg",
        "status": true
      }
]

describe('The BookCollection Testing', () => {
    const handleClick = jest.fn();

    it('checking the function call',() => {
        render(<BooksCollection
                books={allBooks}
                libraryBooks={allLibraryBooks}
                buttonName="Finished"
                status={true}
                onClick={handleClick}/>)
         expect(screen.getByText('The Pegan Diet')).toBeInTheDocument();
        //  fireEvent.click();
        //  expect(handleClick).toHaveBeenCalledTimes(1);
     })
})