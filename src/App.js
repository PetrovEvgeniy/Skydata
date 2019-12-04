import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './components/common/Navigation/Navigation';
//import Footer from './components/common/Footer/Footer';
import HomePage from './pages/home';
import RegisterPage from './pages/register'
import LoginPage from './pages/login';
import FourOFourPage from './pages/404';
import AllAircraftPage from './pages/all-aircraft';
import CreateAircraftPage from './pages/create-aircraft';
import MyProfilePage from './pages/myprofile';

class App extends Component {

  render() {
    return (

      <Router>
        <div className="App">

          <Navigation />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/aircraft/all" component={AllAircraftPage} />
            <Route path="/aircraft/create" component={CreateAircraftPage} />
            <Route path="/my-profile" component={MyProfilePage} />
            <Route path="/*" component={FourOFourPage} />
          </Switch>
        </div>
      </Router>
    );
  }


}

export default App;
