import React from 'react'
import { fireEvent, render, cleanup, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CustomTabs from './CustomizedTabs'

afterEach(cleanup)

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
        const element = screen.getByText('Finished')
        fireEvent.click(element)
        expect(screen.getByText('Finished')).toBeInTheDocument();
    });
    test('library Books click', () => {
      render(<CustomTabs exploreStatus={false}/>);
      expect(screen.getByText('Completed')).toBeInTheDocument();
      fireEvent.click(screen.getByText('Completed'));
    });

    // test('Add To Library click', () => {
    //   render(<CustomTabs searchValue="Economics" exploreStatus={true}/>);
    //   expect(screen.getByText('Add To Library')).toBeInTheDocument();
    //   fireEvent.click(screen.getByText('Add To Library'));
    // });


  });
