import React from 'react'
import { render, cleanup, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Toptab from './TopTab'

afterEach(cleanup)

describe('Tabs Tests', () => {
  test('My Library component', () => {
    render(<Toptab />);
    expect(screen.getAllByText('My Library').length).toEqual(2);
  });

  });
