import React from 'react';
import App from '../client/App.jsx';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Nav from '../client/components/Nav';
import SearchBookRow from '../client/components/SearchBookRow.jsx';

describe('Unit testing React components', () => {
  describe('NavBar', () => {
    let nav;

    beforeAll(() => {
      nav = render(<Nav/>);
    });
    
    test('Renders the nav bar with four(4) components: Home, My Books, Find Books, Log out', () => {
      expect(screen.getByRole('nav-items')).toContainBLAHBLAHBLAH;

      fireEvent.click();

      expect(nav.getByRole('ul').nextSibling).toHaveTextContent('Home');
      expect(nav.getByRole('ul').nextSibling).toHaveTextContent('My Books');
      expect(nav.getByRole('ul').nextSibling).toHaveTextContent('Find Books');
      expect(nav.getByRole('ul').nextSibling).toHaveTextContent('Log out');
      
      
    });
  });

  describe('SearchBookRow', () => {
    let searchBar;

    beforeAll(() => {
      searchBar = render(<SearchBookRow />);
    });

    test('Renders search bar with user input', () => {

    });
  });


describe('MyBookRow', () => {
    let myBookRow

    beforeAll(() => {
      myBookRow = render(<MyBookRow/>);
    });
    test('Renders if delete book functions properly', () => {
        
    });
  });
    
});