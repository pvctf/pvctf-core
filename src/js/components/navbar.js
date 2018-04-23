import React, { Component } from 'react';
import '../../css/navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <div className="main">
        <nav class="navbar navbar-expand-lg navbar-dark">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navToggle" aria-controls="navToggle" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="col"></div>
          <div class="col-8 collapse navbar-collapse" id="navToggle">
            <ul class="main navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="/"><i class="fas fa-home"></i> Home</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fas fa-info-circle"></i> About
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="/about"><i class="fas fa-info-circle"></i> About</a>
                  <a class="dropdown-item" href="/pvctf-team"><i class="fas fa-users"></i> PVCTF Team</a>
                  <a class="dropdown-item" href="/rules"><i class="fas fa-gavel"></i> Rules</a>
                  <a class="dropdown-item" href="/sponsors"><i class="fas fa-donate"></i> Sponsors</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="fas fa-puzzle-piece"></i> Challenges</a>
              </li>
            </ul>
            <ul class="navbar-nav mr-sm-2 mt-2 mt-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="fas fa-sitemap"></i> Team</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="fas fa-sign-in-alt"></i> Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="fas fa-user-plus"></i> Register</a>
              </li>
            </ul>
          </div>
          <div class="col"></div>
        </nav>
      </div>
    );
  }
}
