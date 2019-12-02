import React, { Fragment } from 'react';
import LoginForm from '../components/LoginAndRegisterForms/LoginForm'
const LoginPage = () => {
    return(
        <Fragment>
            <div className="container">
            <LoginForm/>
            </div>
        </Fragment>
    )
}

export default LoginPage;