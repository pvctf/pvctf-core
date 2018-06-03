import React, { Component } from 'react';
import '../../css/home.css';

export default class Home extends Component {
  render () {
    return (
      <div className="home-wrapper">
        <div className="jumbotron jumbotron-fluid pvctf-header-container">
          <div className="container">
            <h1 className="display-4 jumbotron-text">PVCTF</h1>
            <p className="lead jumbotron-desc-1">"Filler Text"</p>
            <p className="lead jumbotron-desc-2"><i className="far fa-calendar-alt"></i> Nov 16 - 25, 2018</p>
          </div>
        </div>
        <div className="jumbotron jumbotron-fluid ctf-desc-container">
          <h2 className="display-4 desc-header">Hold on, what's a CTF?</h2>
          <div className="container">
            <p>CTF stands for "Capture The Flag". Flags are small pieces of information that are wrapped in the <span style={{fontFamily: "monospace"}}>pvctf&#123;&#125;</span> tag.</p>
            <p>These flags will appear in challenges, which can include Binary Exploitation, Web, Forensics, Crypto, Binary, etc. These challenges will contain flags hidden within, challenging you to find them, and capture the flag!</p>
            <p>Each flag has a score value, which will be added to your team's score when you submit a flag. Harder challenges will, obviously, be worth more in score.</p>
          </div>
        </div>
        <div className="jumbotron jumbotron-fluid ">
          <h2 className="display-4 desc-header">What will you do?</h2>
        </div>
      </div>
    );
  }
}
