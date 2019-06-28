import React from 'react';
import { Input, Button } from 'antd';
import PropTypes from 'prop-types';
import Modal from '../Modal/modal';

class EditModal extends React.Component {
  constructor (props) { super(props);
    this.state=
    {
      editableUser: props.editableUser
    };
  }
       onSave = () => {
    this.props.onSave(this.state.editableUser)
  }
  handleChange = ({ target: { value, name } }) => { this.setState({
      editableUser: { ...this.state.editableUser,

        [name]: value   }
    });
  }
  render() { return (
      <Modal onClose={this.props.onClose}>
        <div>
          <h2>Редактирование пользователя</h2>
          <p>Имя</p>
          <Input value={this.state.editableUser.name} onChange={this.handleChange}
          name="name" />
          <p>Логин</p>
          <Input value={this.state.editableUser.login}
          onChange={this.handleChange} name="login" />
          <p>Рейтинг</p><Input value={this.state.editableUser.rating}
          onChange={this.handleChange} name="rating" />
          <Button type='primary'
          onClick={this.onSave}>
 Сохранить</Button>
          <Button type='danger' onClick={this.props.onClose}>
  Отмена</Button>
        </div>
      </Modal>
    );
  }
}

Modal.propTypes = {
  editableUser: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};


export default EditModal;
