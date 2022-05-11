import React from 'react';
import App from '../../client/App.jsx';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import regeneratorRuntime from 'regenerator-runtime';

describe('Unit testing React components', () => {
  describe('NavBar', () => {
    let nav;

    beforeEach(() => {
      nav = render(<App />);
    });
    
    test('NavBar contains four(4) components: Home, My Books, Find Books, Log out', () => {
      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('My Books')).toBeInTheDocument();
      expect(screen.getByText('Find Books')).toBeInTheDocument();
      expect(screen.getByText('Log Out')).toBeInTheDocument();
    });

    xtest('Each link, when clicked, should send the user to the proper route', () => {
      // Click button
      // const user = userEvent.setup(); // Initialize userEvent
      // render(<App />);
      fireEvent.click(screen.getByTestId('mybooks'));
      // expect() // .../mypage
      const mypageTest = screen.getByText('Add');
      expect(mypageTest).toBeInTheDocument();
    });
  });
});