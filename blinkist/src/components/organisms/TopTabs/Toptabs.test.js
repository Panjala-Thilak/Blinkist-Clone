import React from 'react';
import { renderHook, act } from "@testing-library/react-hooks";
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Toptab from './TopTab';

afterEach(cleanup);

describe('Tabs Tests', () => {
  //const handleClick=jest.fn;

  test('My Library component', () => {
    render(<Toptab />);
    expect(screen.getAllByText('My Library').length).toEqual(2);
    fireEvent.click(screen.getAllByText('My Library')[0]);
    expect(screen.getByText("Currently Reading")).toBeInTheDocument();
  });

  test('Checking Add Book',()=>{
    const {getByPlaceholderText}=render(<Toptab />);
    const addBookComponent=screen.getByText('Add Book');
    expect(addBookComponent).toBeTruthy();
    fireEvent.click(addBookComponent);
    fireEvent.change(getByPlaceholderText("Enter Title"),{target:{value:"title"}});
    
    fireEvent.change(getByPlaceholderText("Enter Author Name"),{target:{value:"author"}});
    fireEvent.change(getByPlaceholderText("Time"),{target:{value:20}});
    fireEvent.change(getByPlaceholderText("Time"),{target:{value:20}});
    fireEvent.change(getByPlaceholderText("Category"),{target:{value:"Politics"}});
    fireEvent.click(screen.getByText("submit"));
  });

  it('check the buttom name', () => {
    const{getByPlaceholderText}=render(<Toptab/>);
    const searchElement = screen.getByTitle('searchIcon');
    console.log(searchElement);
    fireEvent.click(searchElement);
    getByPlaceholderText("Search for titles, authors and Categories");
    fireEvent.change(getByPlaceholderText("Search for titles, authors and Categories",{target:{value:"Pol"}}));

  });

  it('check the buttom name', () => {
    const { result } = renderHook(Toptab);
    const{getByPlaceholderText}=render(<Toptab/>);
    const searchElement = screen.getByTitle('searchIcon');
    console.log(searchElement);
    fireEvent.click(searchElement);
    getByPlaceholderText("Search for titles, authors and Categories");
    fireEvent.change(getByPlaceholderText("Search for titles, authors and Categories",{target:{value:"Pol"}}));

    // const{getByPlaceholderText}=render(<Toptab/>);
    // const searchElement = screen.getByTitle('searchIcon');
    // console.log(searchElement);
    // fireEvent.click(searchElement);
    // getByPlaceholderText("Search for titles, authors and Categories");
    // fireEvent.change(getByPlaceholderText("Search for titles, authors and Categories",{target:{value:"Pol"}}));
    
  });

  // it('check the serachIcon Placeholder', () => {
  //  const {getByPlaceholderText}=render(<Toptab/>);

  //  getByPlaceholderText("Search for titles, authors and Categories");
  //  fireEvent.click(searchElement);
  // });


  test('Checking the Explore Menu',()=>{
    
    render(<Toptab />);
   
    fireEvent.click(screen.getByText('Explore'));
    fireEvent.click(screen.getByText('Health'));
    // const explore=getByText('Explore');
    // expect(explore).toBeTruthy();
    // console.log(explore);
    // fireEvent.click(explore);
  });

  });
