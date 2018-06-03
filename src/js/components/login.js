import React, { Component } from 'react';
import '../../css/login.css';
export default class Login extends Component{
    render(){
        return(
            <body>
            <form class="loginForm" action="login-submit.html" method="post">
                <br></br><br></br>
                <p class="login_title">Login</p>
                <input class="usernameField" type="text" name="username" placeholder="Username" required></input><br></br>
                <br></br>
                <input class="passwordField" type="password" name="password" placeholder="Password" required></input><br></br>
                <br></br>
                <input class="submitButton" type="submit" value="Login"></input><br></br>
            </form>
            </body>

        );
    }
}