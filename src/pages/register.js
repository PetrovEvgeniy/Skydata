import React, { Fragment } from 'react';
import RegisterForm from '../components/LoginAndRegisterForms/RegisterForm'

const RegisterPage = (props) => {
    return(
        <Fragment>
            <div className="component">
                <RegisterForm {...props}/>
            </div>
        </Fragment>
    )
}

export default RegisterPage;