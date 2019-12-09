import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './components/common/Navigation/Navigation';
import userService from './services/user-service';
import HomePage from './pages/home';
import RegisterPage from './pages/register'
import LoginPage from './pages/login';
import Logout from './components/Logout/Logout';
import FourOFourPage from './pages/404';
import AllAircraftPage from './pages/all-aircraft';
import AircraftDetailsPage from './pages/details-aircraft';
import CreateAircraftPage from './pages/create-aircraft';
import MyProfilePage from './pages/myprofile';


function render(Cmp,{isLogged, ...otherProps}, isProtected){
  return (props) => {
    if(!isLogged && isProtected){
      return <Redirect to="/login"></Redirect>
    }
    else{
      return <Cmp {...props} {...otherProps} />
    }
  }
}

function parseCookies() {
  return document.cookie.split('; ').reduce((acc, cookie) => {
    const [cookieName, cookieValue] = cookie.split('=');
    acc[cookieName] = cookieValue;
    return acc;
  }, {})
}

function cookieExcists(cookies){
    return !!cookies['x-auth-token'];
}

class App extends Component {
  constructor(props) {
    super(props);
    const cookies = parseCookies();
    const isLogged = cookieExcists(cookies);
    this.state = { isLogged };
  }

  logout = (history) => {
    userService.logout().then(() => {
      this.setState({ isLogged: false });
      history.push('/');
      return null;
    });
  }

  login = (history, data) => {
    return userService.login(data).then(() => {
      this.setState({ isLogged: true });
      history.push('/');
    });
  }
  render() {

   const isLogged = this.state.isLogged;
   
    return (
      <Router>
        <div className="App">
          <Navigation isLogged={isLogged}/>
          <Switch>
            <Route path="/" exact render={render(HomePage,
              {isLogged})} />

            <Route path="/aircraft/all" render={render(AllAircraftPage,
              {isLogged})} />

            <Route path="/aircraft/details/:id" render={render(AircraftDetailsPage,
              {isLogged})} />

            <Route path="/aircraft/create" render={render(CreateAircraftPage,
              {isLogged}, true)} />

            <Route path="/register" render={render(RegisterPage,
              {isLogged})} />

            <Route path="/login"  render={render(LoginPage,
              {isLogged,login:this.login})} />

            <Route path="/my-profile" render={render(MyProfilePage,
              {isLogged},true)} />

            <Route path="/logout" render={render(Logout,
              {isLogged,logout:this.logout}, true)} />

            <Route path="/*" render={render(FourOFourPage,
              {isLogged})} />
              
          </Switch>
        </div>
      </Router>
    );
  }


}

export default App;
