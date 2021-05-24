import React from 'react';
import { fireEvent, render, cleanup, screen, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CustomTabs from './CustomizedTabs';

afterEach(cleanup);

global.fetch = jest.fn(() => Promise.resolve());

describe('Tabs Tests', () => {
  test('renders App component', () => {
    render(<CustomTabs />);
 
    expect(screen.getByText('Currently Reading')).toBeInTheDocument();
  });

  test('renders Finished component', () => {
    render(<CustomTabs />);
 
    expect(screen.getByText('Finished')).toBeInTheDocument();
  });

    test('Finished Click component', () =>  {
        render(<CustomTabs />);
        const element = screen.getByText('Finished');
        fireEvent.click(element);

    });

    test('library Books click', async() => {
      
      render(<CustomTabs exploreStatus={false}/>);
      fireEvent.click(screen.getAllByText('Mark as Completed')[0]);
      fireEvent.click(screen.getByText('Finished'));
      fireEvent.click(screen.getAllByText('Read Once Again')[0]);
    });

    test('Add To Library click', () => {
      render(<CustomTabs searchValue="Entrepreneurship" exploreStatus={true}/>);
      expect(screen.getAllByText('Entrepreneurship Books')).toBeTruthy();
      
      //fireEvent.click(screen.getAllByText('+ Add To Library')[0]);
      // expect();
    });

    test('searching for books', async() => {
      
      render(<CustomTabs searchValue="Entrepreneurship" exploreStatus={false}/>);
      expect(screen.getByText('Entrepreneurship')).toBeInTheDocument();
    });

  });
