import React, { Component } from 'react';
import '../../css/home.css';

export default class Home extends Component {
  render () {
    return (
      <div className="home-wrapper">
        <div className="jumbotron jumbotron-fluid pvctf-header-container">
          <div className="container">
            <h1 className="display-4 jumbotron-text">PVCTF</h1>
            <p className="lead jumbotron-desc-1">High School CTF run by students of Poolesville High School</p>
            <p className="lead jumbotron-desc-2"><i className="far fa-calendar-alt"></i> Nov 16 - 25, 2018</p>
          </div>
        </div>
        <div className="jumbotron jumbotron-fluid pvctf-desc-container">
          <div className="container">
            <h2 className="display-4 pvctf-desc-header">Hold on, what is PVCTF?</h2>
          </div>
        </div>
      </div>
    );
  }
}
