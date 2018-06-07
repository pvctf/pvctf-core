import React from 'react';
import ReactDOM from 'react-dom';
import  { BrowserRouter, Router, Route } from 'react-router-dom'

import Navbar from './js/components/navbar';
import About from './js/components/about';
import Home from './js/components/home';
import Footer from './js/components/footer';
import Login from './js/components/login';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Route exact path="/" component={ Home }/>
        <Route path="/about" component={ About }/>
        <Footer/>
          <Route path="/login" component={ Login }/>
      </div>
    </BrowserRouter>
  ), document.getElementById('root'));
registerServiceWorker();
