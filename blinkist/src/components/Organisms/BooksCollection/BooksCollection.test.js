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
      "id": 2,
      "title": "Dropshipping",
      "author": "James Moore",
      "time": "20",
      "category": "Entrepreneurship",
      "image": "https://images.blinkist.com/images/books/60701b716cee070008b8b7a1/1_1/470.jpg",
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
      "id": 4,
      "title": "Genesis",
      "author": "Guido Tonelli",
      "time": "12",
      "category": "Science",
      "image": "https://images.blinkist.com/images/books/608bcaf36cee07000722912e/1_1/470.jpg",
      "status": true
    },
    {
      "id": 5,
      "title": "Exercised",
      "author": "Daniel E. Lieberman",
      "time": "13",
      "category": "Science",
      "image": "https://images.blinkist.com/images/books/60507e296cee070007c4dc7e/1_1/470.jpg",
      "status": true
    },
    {
      "id": 6,
      "title": "Forest Bathing",
      "author": "Qing Li",
      "time": "12",
      "category": "Health",
      "image": "https://images.blinkist.com/images/books/60950a3c6cee070007151f86/1_1/470.jpg",
      "status": true
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
    {
      "id": 8,
      "title": "Hyper-Learning",
      "author": "Edward D.Hess",
      "time": "13",
      "category": "Education",
      "image": "https://images.blinkist.com/images/books/609155fc6cee070007ccb3ad/1_1/470.jpg",
      "status": true
    }]
let allLibraryBooks=[
    {
        "id": 5,
        "title": "Exercised",
        "author": "Daniel E. Lieberman",
        "time": "13",
        "category": "Science",
        "image": "https://images.blinkist.com/images/books/60507e296cee070007c4dc7e/1_1/470.jpg",
        "status": true
      },
      {
        "id": 6,
        "title": "Forest Bathing",
        "author": "Qing Li",
        "time": "12",
        "category": "Health",
        "image": "https://images.blinkist.com/images/books/60950a3c6cee070007151f86/1_1/470.jpg",
        "status": true
      },
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