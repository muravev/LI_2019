import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Button from 'antd/es/button';

class UserDetail extends React.Component {
  get user () {
    return this.props.users.find(i => i.id === +this.props.match.params.id);
  }

  goBack = () => {
    this.props.history.push('/users');
  }

  render() {
    return (
      <React.Fragment>
        <h2>Id: {this.props.match.params.id} | Name: {this.user.name}</h2>

        <Button onClick={this.goBack}>
          Назад
        </Button>
      </React.Fragment>
    );
  }
}

UserDetail.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  users: PropTypes.array
};

const mapStateToProps = state => ({
  users: state.users
});

export default withRouter(
  connect(mapStateToProps)(UserDetail)
);
