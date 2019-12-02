import React from 'react';
import '../LoginAndRegisterForms/forms-style.css';
import {Container} from 'react-bootstrap'

const LoginForm = () => {
    return(
        <div className="login">
            <form action="#" method="post">
                <Container>
                <h1>Login</h1>
                     <p>Please enter your credentials.</p>
                     <hr/>
                     <p>Username</p>
                    <input placeholder="Enter Username" name="username" type="text"/>
                     <p>Password</p>
                    <input type="password" placeholder="Enter Password" name="password"/>
                    <hr/>
                    <button type="submit" className="registerbtn">Login</button>
                </Container>
            </form>

        </div>
        
    
    );
}

export default LoginForm;

