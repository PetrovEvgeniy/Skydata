import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './components/common/Navigation/Navigation';
import userService from './services/user-service';
import Logout from './components/Logout/Logout';
import FourOFourPage from './pages/404';
import AllAircraftPage from './pages/all-aircraft';
import AircraftDetailsPage from './pages/details-aircraft';
import MyProfilePage from './pages/myprofile';
import Spinner from './components/UI/Spinner/Spinner';

const HomePage = React.lazy(() => import('./pages/home'));
const RegisterPage = React.lazy(() => import('./pages/register'));
const LoginPage = React.lazy(() => import('./pages/login'));
const CreateAircraftPage = React.lazy(() => import('./pages/create-aircraft'));


function render(Cmp, { isLogged, ...otherProps }, isProtected) {
  return (props) => {
    //Route protection
    if (!isLogged && isProtected) {
      return <Redirect to="/login"></Redirect>
    }
    else {
      return <Cmp {...props} {...otherProps} />
    }
  }
}


class App extends Component {
  constructor(props) {
    super(props);
    const isLogged = this.tokenExcists() && this.tokenNotExpired();
    const authToken = this.getAuthToken(isLogged);
    this.state = {
       isLogged,
       authToken };
  }

  tokenExcists() {
    return !!localStorage.getItem('x-auth-token');
  }

  tokenNotExpired(){  
    return new Date(localStorage.getItem('expirationDate')).getTime() > new Date().getTime();
  }
  
   getAuthToken(isLogged) {
    if (isLogged) {
      const authToken = localStorage.getItem('x-auth-token');
      return authToken;
    }
    else {
      return null;
    }
  }

  logout = (history) => {
    userService.logout().then(() => {
      this.setState({ isLogged: false,authToken: null});
      localStorage.removeItem('x-auth-token');
      localStorage.removeItem('expirationDate');
      history.push('/');
      return null;
    });
  }

  login = (history, data) => {
    return userService.login(data).then(([user,token]) => {
      this.setState({ isLogged: true, authToken: token});
      const expirationDate = new Date(new Date().getTime() + 360000 * 10)
      localStorage.setItem('x-auth-token', token);
      localStorage.setItem('expirationDate', expirationDate);
    })
    .then(history.push('/'))
  } 

  render() {

    const isLogged = this.state.isLogged;
    const authToken = this.state.authToken; 

    return (
      
      <Router>
        <div className="App">
          <Navigation isLogged={isLogged} />
          <Suspense fallback={<div style={{
            display: 'flex',  
            justifyContent:'center', 
            alignItems:'center', 
            height: '100vh'}}><Spinner/></div>}>
          <Switch>
            <Route path="/" exact 
            render={render(HomePage, { isLogged })} />

            <Route path="/aircraft/all" 
            render={render(AllAircraftPage,{ isLogged })} />

            <Route path="/aircraft/details/:id" 
            render={render(AircraftDetailsPage,{ isLogged })} />

            <Route path="/aircraft/create" 
            render={render(CreateAircraftPage,{ isLogged }, true)} />

            <Route path="/register" 
            render={render(RegisterPage,{ isLogged })} />

            <Route path="/login" 
            render={render(LoginPage,{ isLogged, login: this.login })} />

            <Route path="/my-profile" 
            render={render(MyProfilePage,{ isLogged, authToken }, true)} />

            <Route path="/logout" 
            render={render(Logout,{ isLogged, logout: this.logout }, true)} />

            <Route path="/*" 
            render={render(FourOFourPage,{ isLogged })} />

          </Switch>
          </Suspense>
        </div>
      </Router>
    );
  }


}

export default App;
