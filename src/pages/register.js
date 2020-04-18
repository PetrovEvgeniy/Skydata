import React from 'react';
import RegisterForm from '../components/Forms/LoginAndRegisterForms/RegisterForm'

const RegisterPage = (props) => {
    return(
        <div className="component">
            <RegisterForm {...props}/>
        </div>
    )
}

export default RegisterPage;