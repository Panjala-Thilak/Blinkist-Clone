import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import CustomForm from './CustomForm';

afterEach(cleanup);

describe('The Form Testing', () => {
    const handleClick=jest.fn;

    it('Checking The Add Book Title', () => {
        render(<CustomForm/>);
        expect(screen.getByText('Add Book')).toBeInTheDocument();
    });

    it('Checking the alert', () => {
        const {getByPlaceholderText}=render(<CustomForm parentFunction={handleClick}/>);
        expect(screen.getByText('Title')).toBeInTheDocument();
        expect(screen.getByText('Author')).toBeInTheDocument();
        expect(screen.getByText('Time')).toBeInTheDocument();
        getByPlaceholderText("Enter Title");
        fireEvent.change(getByPlaceholderText("Enter Title"),{target:{value:"title"}});
        fireEvent.change(getByPlaceholderText("Enter Author Name"),{target:{value:""}});
        fireEvent.change(getByPlaceholderText("Time"),{target:{value:20}});
        fireEvent.change(getByPlaceholderText("Time"),{target:{value:20}});
        fireEvent.change(getByPlaceholderText("Category"),{target:{value:"Politics"}});
        fireEvent.click(screen.getByText("submit"));
    });

    it('Checking The Form Elements', () => {
        const {getByPlaceholderText}=render(<CustomForm parentFunction={handleClick}/>);
        expect(screen.getByText('Title')).toBeInTheDocument();
        expect(screen.getByText('Author')).toBeInTheDocument();
        expect(screen.getByText('Time')).toBeInTheDocument();
        getByPlaceholderText("Enter Title");
        fireEvent.change(getByPlaceholderText("Enter Title"),{target:{value:"title"}});
        
        fireEvent.change(getByPlaceholderText("Enter Author Name"),{target:{value:"author"}});
        fireEvent.change(getByPlaceholderText("Time"),{target:{value:20}});
        fireEvent.change(getByPlaceholderText("Time"),{target:{value:20}});
        fireEvent.change(getByPlaceholderText("Category"),{target:{value:"Politics"}});
        fireEvent.click(screen.getByText("submit"));
    });
});