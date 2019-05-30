import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import {Route} from 'react-router-dom';
import SignUp from './containers/SignUp'

import { Button } from 'reactstrap';

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
      <Nav />

      <Route path="/signup" component={SignUp}/>

      </React.Fragment>
    );
  }
}

export default App;