import React from 'react';
import PropTypes from 'prop-types';
import Button from 'antd/es/button';
import { withRouter } from 'react-router';

class User extends React.Component{
  onDelete = () => {
    this.props.onDelete(this.props.data.id);
  }

  onEdit = () => {
    this.props.onEdit(this.props.data.id);
  }

  render() {
    const props = this.props;
    const { data } = props;


    return (
      <tr onClick={() => props.history.push('/users/' + data.id)}>
        <td>{data.login}</td>
        <td>{data.name}</td>
        <td>{data.lastVizit}</td>
        <td>{data.rating}</td>
        <td>
          <Button type="primary" onClick={this.onEdit}>Редактировать</Button>
          <Button type="danger" onClick={this.onDelete}>Удалить</Button>
        </td>
      </tr>
    );
  }
}

User.propTypes = {
  data: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default withRouter(User);
