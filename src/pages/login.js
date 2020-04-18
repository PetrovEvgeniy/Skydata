import React from 'react';
import LoginForm from '../components/Forms/LoginAndRegisterForms/LoginForm'
const LoginPage = (props) => {
    return(
        <div className="container vh-90">
            <LoginForm {...props}/>
        </div>
    )
}

export default LoginPage;