import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import './css/index.css';
import VixenEmpire from './VixenEmpire';

ReactDOM.render(
  <React.StrictMode>

      <Router>
        <VixenEmpire />
      </Router>
  
  </React.StrictMode>,
  document.getElementById('root')
);


