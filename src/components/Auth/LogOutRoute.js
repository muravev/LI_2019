import React from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

class LogOutRoute extends React.Component {
  componentWillMount() {
    Cookies.remove('token');
  }

  render() {
    return (
      <Redirect to="/" />
    );
  }
}

export default LogOutRoute;
