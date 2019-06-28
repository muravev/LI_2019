import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import { connect } from 'react-redux';
import './user.css';
import EditModal from '../modalEditUser';
import * as actions from '../../redux/actions/userActions';

class UsersList extends React.Component {
  state = {
    isModalOpen: false,
    editableUserId: null
  }

  onCloseEditModal = () => {
    this.closeModal();
  }

  onEditModalSave = (editableUser) => {
    this.props.edit(editableUser);

    this.closeModal();
  }

  closeModal = () => {
    this.setState({
      isModalOpen: false,
      editableUserId: null
    });
  }

  openModalWithUser = (editableUserId) => {
    this.setState({
      isModalOpen: true,
      editableUserId
    });
  }

  deleteUser = (id) => {
    this.props.delete(id);
  }

  get editableUser() {
    return this.props.users.find(i => i.id === this.state.editableUserId);
  }

  get list() {
    return (
      <div>
        <h2>Пользователи</h2>
        <table className="table-user">
          <thead>
            <tr>
              <th>Логин</th>
              <th>ФИО</th>
              <th>Дата последнего посещения</th>
              <th>Рейтинг</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.users.map(user =>
              <User
                data={user}
                key={user.login}
                onEdit={this.openModalWithUser}
                onDelete={this.deleteUser}
              />
            )}
          </tbody>
        </table>

        {this.state.isModalOpen &&
          <EditModal
            editableUser={this.editableUser}
            onClose={this.onCloseEditModal}
            onSave={this.onEditModalSave}
          />
        }
      </div>
    );
  }

  render() {
    return this.list;
  }
}

UsersList.propTypes = {
  users: PropTypes.array,
  edit: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired
};

UsersList.defaultProps = {
  users: []
};

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  edit: user => dispatch(actions.editUser(user)),
  delete: id => dispatch(actions.deleteUser(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);

