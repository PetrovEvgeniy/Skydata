import React, { Fragment } from 'react';
import LoginForm from '../components/LoginAndRegisterForms/LoginForm'
const LoginPage = () => {
    return(
        <Fragment>
            <div className="container vh-90">
            <LoginForm/>
            </div>
        </Fragment>
    )
}

export default LoginPage;