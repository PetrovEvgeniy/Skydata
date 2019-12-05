import React, { Fragment } from 'react';
import LoginForm from '../components/LoginAndRegisterForms/LoginForm'
const LoginPage = (props) => {
    return(
        <Fragment>
            <div className="container vh-90">
            <LoginForm {...props}/>
            </div>
        </Fragment>
    )
}

export default LoginPage;