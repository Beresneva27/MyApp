import reportWebVitals from './reportWebVitals';
//import { rerenderEntireTree } from './render';
import React from 'react';
import ReactDOM from 'react-dom/client';
//import * as reportWebVitals from "./reportWebVitals";
import './index.css';
import App from './App';
import SamuraiJSApp from './App';

//let rerenderEntireTree = () => { 
  ReactDOM.render( <SamuraiJSApp />, document.getElementById( 'root'));
//} 


reportWebVitals();
