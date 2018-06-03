import React from 'react';
import ReactDOM from 'react-dom';
import  { BrowserRouter, Router, Route } from 'react-router-dom'

import Navbar from './js/components/navbar';
import About from './js/components/about';
import Home from './js/components/home';
<<<<<<< HEAD
import Footer from './js/components/footer';
=======
import Login from './js/components/login';
>>>>>>> 3517af9493aa54c03eb911dfd1a72801218941b1

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Route exact path="/" component={ Home }/>
        <Route path="/about" component={ About }/>
<<<<<<< HEAD
        <Footer/>
=======
          <Route path="/login" component={ Login }/>
>>>>>>> 3517af9493aa54c03eb911dfd1a72801218941b1
      </div>
    </BrowserRouter>
  ), document.getElementById('root'));
registerServiceWorker();
