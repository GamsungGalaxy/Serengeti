import React from 'react';
import App from '../client/App.jsx';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBookRow from '../client/components/SearchBookRow.jsx';

describe('Unit testing React components', () => {
  describe('NavBar', () => {
    let nav;

    beforeAll(() => {
      nav = render(<App />);
    });
    
    test('NavBar contains four(4) components: Home, My Books, Find Books, Log out', () => {
      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('My Books')).toBeInTheDocument();
      expect(screen.getByText('Find Books')).toBeInTheDocument();
      expect(screen.getByText('Log out')).toBeInTheDocument();
      
      // expect(screen.getByRole('nav-items')).toContainBLAHBLAHBLAH;
      // fireEvent.click();
    });

    test('Each link, when clicked, should send the user to the proper route', () => {
      
    });
  });

  xdescribe('SearchBookRow', () => {
    let searchBar;

    beforeAll(() => {
      searchBar = render(<SearchBookRow />);
    });

    test('Renders search bar with user input', () => {

    });
  });


  xdescribe('MyBookRow', () => {
    let myBookRow

    beforeAll(() => {
      myBookRow = render(<MyBookRow/>);
    });
    test('Renders if delete book functions properly', () => {
        
    });
  });
    
});