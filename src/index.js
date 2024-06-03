import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Home from './Home.js';
import UpdateProducts from './new-update-product.js';
import Catalogue from './Catalogue.js';
import Product from './Product.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Routes>
            <Route path='/' Component={Home} />
            <Route path='/update-products' Component={UpdateProducts} />
            <Route path='/catalogue'>
                <Route path='' Component={Catalogue} />
                <Route path=':params' Component={Product} />
            </Route>
        </Routes>
    </Router>
);

