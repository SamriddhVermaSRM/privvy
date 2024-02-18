import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Home from './Home.js';
import UpdateProducts from './UpdateProducts.js';
import Catalogue from './Catalogue.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/update-products' Component={UpdateProducts} />
        <Route path='/catalogue' Component={Catalogue}>
          <Route path=':name' Component={Catalogue} />
        </Route>
      </Routes>
  </Router>
);

