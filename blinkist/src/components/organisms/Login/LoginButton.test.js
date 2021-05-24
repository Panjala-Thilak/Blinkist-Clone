import React from 'react';
import Button from './LoginButton';

import { cleanup, fireEvent, render} from '@testing-library/react';
import { Auth0Provider } from '@auth0/auth0-react';

afterEach(cleanup);

describe('Checking the Login Button', () => {

    it('check the buttom name', () => {
      const {getByTestId}=render(<Button/>);
      const name = getByTestId('button');
      expect(name.textContent).toBe('Log In');
    });
   
    it('Checking the click',() => {

    const {getByTestId} = render(<Button />);
        expect(getByTestId("button")).toBeTruthy();
    });

    it('checking the function call',() => {

        Object.defineProperty(global.self, 'crypto', {
        value: {
            getRandomValues: arr => crypto.randomBytes(arr.length)
        }
        });
        global.crypto.subtle = {};
        const {getByTestId}=render(<Auth0Provider
            domain="thilakpanjala.us.auth0.com"
            clientId="JrcO7k3G3kcBlUG2AHduax1Oor70DsfB"
            redirectUri={window.location.origin}
            >
              <Button />
            </Auth0Provider>);
        const LoginButton = getByTestId('button');
        fireEvent.click(LoginButton);
    });
});