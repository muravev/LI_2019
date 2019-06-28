import React from 'react';
import Widget from './Widget';
import Nav from './Nav';

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Nav/>
        <Widget/>
      </React.Fragment>
    );
  }
}

export default Layout;
