import React from 'react';
import '../LoginAndRegisterForms/forms-style.css';

const RegisterForm = () => {
    return(
        <div id="register">
        <form>
            <div className="container">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr/>

                <p>Username</p>
                <input type="text" placeholder="Enter Username" name="username" required/>

                <p>Password</p>
                <input type="password" placeholder="Enter Password" name="password" required/>

                <p>Repeat Password</p>
                <input type="password" placeholder="Repeat Password" name="repeatPass" required/>
                <hr/>

                <button type="submit" className="registerbtn">Register</button>
            </div>
        </form>
    </div>
        
    
    );
}

export default RegisterForm;

