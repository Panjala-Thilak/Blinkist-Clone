import React from 'react'
import { render, cleanup, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Toptab from './TopTab'

afterEach(cleanup)

describe('Tabs Tests', () => {
  //const handleClick=jest.fn;

  test('My Library component', () => {
    render(<Toptab />);
    expect(screen.getAllByText('My Library').length).toEqual(2);
    fireEvent.click(screen.getAllByText('My Library')[0])
  });

  test('Checking Add Book',()=>{
    render(<Toptab />);
    const addBookComponent=screen.getByText('Add Book');
    expect(addBookComponent).toBeTruthy();
    fireEvent.click(addBookComponent);
  });

  it('check the buttom name', () => {
    const{getByPlaceholderText}=render(<Toptab/>)
    const searchElement = screen.getByTitle('searchIcon');
    fireEvent.click(searchElement);
    getByPlaceholderText("Search for titles, authors and Categories");
    fireEvent.change(getByPlaceholderText("Search for titles, authors and Categories",{target:{value:"Pol"}}))

  })

  it('check the serachIcon Placeholder', () => {
   // const {getByPlaceholderText}=render(<Toptab/>)
   // getByPlaceholderText("Search for titles, authors and Categories");
   // fireEvent.click(searchElement);
  })


  test('Checking the Explore Menu',()=>{
    
    const container=render(<Toptab />);
    console.log(container);
    // const explore=getByText('Explore');
    // expect(explore).toBeTruthy();
    // console.log(explore);
    // fireEvent.click(explore);
  })

  });
