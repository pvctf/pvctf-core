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
            <h2 className="display-4 pvctf-desc-header">Hold on, what's a CTF?</h2>
            <p>A CTF is a competition which involves competitors racing to find flags, which are generally, but not always, phrases wrapped in the <span style={{fontFamily: "monospace"}}>pvctf&#123;&#125;</span> tag.</p>
            <p>These flags will appear in challenges, which can include Binary Exploitation, Web, Forensics, Crypto, Binary, etc. <a tabIndex="0" className="btn btn-lg btn-danger" role="button" data-toggle="popover" data-trigger="focus" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?">Dismissible popover</a></p>
            <p className="extraInfo">More information on challenges can be found on the <a href="/about">about</a> page.</p>
          </div>
        </div>
      </div>
    );
  }
}
