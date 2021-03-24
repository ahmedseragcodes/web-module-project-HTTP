//TECH IMPORTS 
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
//STYLING IMPORTS 
import './index.css';
//COMPONENT IMPORTS 
import App from './App'


ReactDOM.render(
  <Router>
      <App />
  </Router>,
  document.getElementById('root')
);
