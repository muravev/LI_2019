import React from 'react';
import { Button } from 'antd';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';


class LogOut extends React.Component {
  onClick = () => {
    this.props.history.push('/logout');
  }

  render() {
    return (
      <Button onClick={this.onClick}>Выход</Button>
    );
  }
}
LogOut.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
}).isRequired
};

LogOut = withRouter(LogOut);

export default LogOut;
