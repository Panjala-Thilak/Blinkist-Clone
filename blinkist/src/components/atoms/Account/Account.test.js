import React from 'react';
import Avatar from './Account'

import { render } from '@testing-library/react'


describe('Avatar', () => {
    test('Checking the avatar', () => {
      const {getByTestId}=render(<Avatar firstName="Thilak" lastName="Panjala"/>)
      const name = getByTestId('avatar')
      expect(name.textContent).toBe('TP')
    })
  })