import React from 'react';
import '../LoginAndRegisterForms/forms-style.css';


const LoginForm = () => {
    return(
        <div className="login">
            <form action="#" method="post">
                <div className="container">
                <h1>Login</h1>
                     <p>Please enter your credentials.</p>
                     <hr/>
                     <p>Username</p>
                    <input placeholder="Enter Username" name="username" type="text"/>
                     <p>Password</p>
                    <input type="password" placeholder="Enter Password" name="password"/>
                    <button type="submit" className="registerbtn">Login</button>
                   
                </div>
            </form>

        </div>
        
    
    );
}

export default LoginForm;

