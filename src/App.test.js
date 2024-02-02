import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import { ReactDOM } from 'react';
import SamuraiJSApp from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SamuraiJSAppApp />, div);
  ReactDOM.unmountComponentAtNode(div);
}); 
