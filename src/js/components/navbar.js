import React, { Component } from 'react';
import '../../css/navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <div className="main">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navToggle" aria-controls="navToggle" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="col"></div>
          <div className="col-8 collapse navbar-collapse" id="navToggle">
            <ul className="main navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/"><i className="far fa-home"></i> Home</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="far fa-info-circle"></i> About
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/about"><i className="far fa-info-circle"></i> About</a>
                  <a className="dropdown-item" href="/pvctf-team"><i className="far fa-users"></i> PVCTF Team</a>
                  <a className="dropdown-item" href="/rules"><i className="far fa-gavel"></i> Rules</a>
                  <a className="dropdown-item" href="/sponsors"><i className="far fa-donate"></i> Sponsors</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="far fa-puzzle-piece"></i> Challenges</a>
              </li>
            </ul>
            <ul className="navbar-nav mr-sm-2 mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="far fa-sitemap"></i> Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login"><i className="far fa-sign-in-alt"></i> Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="far fa-user-plus"></i> Register</a>
              </li>
            </ul>
          </div>
          <div className="col"></div>
        </nav>
      </div>
    );
  }
}
