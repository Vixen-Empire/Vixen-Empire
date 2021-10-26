import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import {Auth} from './Context/Auth'
import './css/index.css';
import VixenEmpire from './VixenEmpire';

ReactDOM.render(
  <React.StrictMode>
    <Auth>
      <Router>
        <VixenEmpire />
      </Router>
    </Auth>
  </React.StrictMode>,
  document.getElementById('root')
);

/*******************************************************
 * Copyright (C) 2021 Vixen Empire
 * 
 * This file is part of Vixen Empire.
 * 
 * Vixen Empire can not be copied and/or distributed without the express
 * permission of founder Elisa Alvarez
 *******************************************************/
