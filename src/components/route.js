import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home/index';
import UserList from './UserList/UserList';
import Cookies from 'js-cookie';
import LogIn from './Auth/logIn';
import LogOutRoute from './Auth/LogOutRoute';
import NotFound from './NotFound/index';
import UserDetail from './userDetail';

const CheckRoute = ({
  component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      const isLoggedIn = !!Cookies.get('token');
      return isLoggedIn ?
        (<Component {...props} />)
        :
        (<Redirect to={{pathname: '/login', state: { from: props.location } }}/>);
    }
    }
  />
);

export default () => (
  <Switch>
    <CheckRoute path="/" exact component={Home}/>
    <CheckRoute path="/users" exact component={UserList}/>
    <CheckRoute path="/logout" exact strict component={LogOutRoute}/>
    <Route path="/login" render={props => {
      const isLoggedIn = !!Cookies.get('token');
      return !isLoggedIn ?
        (<LogIn/>)
        :
        (<Redirect to={{pathname: '/'}}/>);
    }}/>
    <Route path="/users/:id" exact component={UserDetail}/>
    <Route component={NotFound}/>
  </Switch>
);
