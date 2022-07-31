import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route,  Routes } from 'react-router-dom';
import './index.css';

//? Screens
import Dashboard from './screen/Dashboard';
import Login from './screen/Login';
import Home from './screen/Home';
import Signup from './screen/Signup';
import Pricing from "./screen/Pricing";

ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
          <Route path='/pricing' element={<Pricing />} />
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,

  document.getElementById('root')
);
