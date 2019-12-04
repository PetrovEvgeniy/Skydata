import React, { Component } from 'react';
import '../LoginAndRegisterForms/forms-style.css';
import FormErrors from '../FormErrors/FormErrors';
import userService from '../../services/user-service'

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      rePassword: '',
      formErrors: { username: '', password: '', rePassword: '' },
      usernameValid: false,
      passwordValid: false,
      rePasswordValid: false,
      formValid: false,
    }

    this.handleUserInput = this.handleUserInput.bind(this);
    

  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    },
      () => { this.validateField(name, value) });
  }

  //Validation
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let usernameValid = this.state.usernameValid;
    let passwordValid = this.state.passwordValid;
    let rePasswordValid = this.state.rePasswordValid;

    switch (fieldName) {
      case 'username':
        usernameValid = value.length >= 3;
        fieldValidationErrors.username = usernameValid ? '' : ' should be at least 3 characters long.';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '' : ' should be at least 6 characters long.';
        break;
      case 'rePassword':
        rePasswordValid = value === this.state.password;
        fieldValidationErrors.rePassword = rePasswordValid ? '' : 'Passwords do not match.';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      usernameValid: usernameValid,
      passwordValid: passwordValid,
      rePasswordValid: rePasswordValid,
    }, this.validateForm);
  }

  validateForm() {
    this.setState({ formValid: 
      this.state.usernameValid &&
       this.state.passwordValid &&
        this.state.rePasswordValid });
  }

  submitFormHandler = (event) => {
    event.preventDefault();
    const userData = {
      username: this.state.username,
      password: this.state.password
    }
    //register user
    userService.register(userData).then(this.props.history.push('/login'));

  };


  render() {
    return (
      <div id="register">
        <form onSubmit={this.submitFormHandler}>
          <div className="container">
            <h1>Register</h1>
            <FormErrors formErrors={this.state.formErrors} />
            
            <hr />

            <p>Username</p>
            <input type="text" value={this.state.username} placeholder="Enter Username" name="username" onChange={this.handleUserInput} />

            <p>Password</p>
            <input type="password" placeholder="Enter Password" name="password" onChange={this.handleUserInput} />

            <p>Repeat Password</p>
            <input type="password" placeholder="Repeat Password" name="rePassword" onChange={this.handleUserInput} />
            <hr />

            <button type="submit" disabled={!this.state.formValid} className="registerbtn" onClick={this.submitFormHandler}>Register</button>
          </div>
        </form>
      </div>
    )
  }
}

export default RegisterForm;

