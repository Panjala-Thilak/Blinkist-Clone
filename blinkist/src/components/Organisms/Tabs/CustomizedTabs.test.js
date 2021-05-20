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

  test('rendefrs App component', () => {
    render(<CustomTabs />);
 
    expect(screen.getByText('Finished')).toBeInTheDocument();
  });
    test('rsdendsers App component', () =>  {
        render(<CustomTabs />);
        const element = screen.getByText('Finished')
        fireEvent.click(element)
        expect(screen.getByText('Finished')).toBeInTheDocument();
    });
  });
