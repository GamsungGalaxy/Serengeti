/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
// import { render } from 'react-dom';
import App from './App.jsx';
import {createRoot} from 'react-dom/client'
//our entry point  which allows us to include all the react components
//building block for the bundle
//contains all react components
// render(
//   <App />,
//   document.getElementById('root'),
// );


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);