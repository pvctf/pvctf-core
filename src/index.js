import React from 'react';
import ReactDOM from 'react-dom';
import  { BrowserRouter, Router, Route } from 'react-router-dom'
import Navbar from './js/components/navbar';
import About from './js/components/about'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Route path="/about" component={ About }/>
      </div>
    </BrowserRouter>
  ), document.getElementById('root'));
registerServiceWorker();
