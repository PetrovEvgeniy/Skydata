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

function parseCookies() {
  return document.cookie.split('; ').reduce((acc, cookie) => {
    cookie = cookie.replace('%20', ' ');
    const [cookieName, cookieValue] = cookie.split('=');
    acc[cookieName] = cookieValue;
    return acc;
  }, {})
}

function cookieExcists(cookies) {
  return !!cookies['x-auth-token'];
}

function getAuthToken(isLogged, cookies) {
  if (isLogged) {
    const authToken = cookies['x-auth-token'];
    return authToken;
  }
  else {
    return null;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    const cookies = parseCookies();
    const isLogged = cookieExcists(cookies);
    const authToken = getAuthToken(isLogged, cookies);
    this.state = {
       isLogged,
       authToken };
  }

  logout = (history) => {
    userService.logout().then(() => {
      this.setState({ isLogged: false, username: null });
      history.push('/');
      return null;
    });
  }

  login = (history, data) => {
    return userService.login(data).then(() => {
      this.setState({ isLogged: true, });
      history.push('/');
    });
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
