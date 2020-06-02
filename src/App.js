import React from 'react';
//import logo from './logo.svg';
import './fontawesome.css';
import './style.css';
import Filter from './components/filter';
import CarOwner from './components/carowner';
import {getFilters,queryOwner} from './api';
import Loader from 'react-loader-spinner';
import {Router,} from 'react-router-dom';
import Routes from './routes';
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

class App extends React.Component {
 
  
  render(){
  return (
    <Router history={history}>
      <Routes />
    </Router>
 );
}
}

export default App;
