import React from 'react';
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import Home from './Home';
import Detail from './components/Detail';
import Review from './components/Review';
import Footer from './components/Footer';
import Header from './components/Header';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Detail' element={<Detail/>}/>
      <Route path='/Review' element={<Review/>}/>
      
    </Routes>
   </BrowserRouter>

  </React.StrictMode>
);
