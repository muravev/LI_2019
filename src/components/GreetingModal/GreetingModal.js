import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import Modal from '../../components/Modal/modal';
import './GreetingModal.css';
import { ModalContext } from '../context';

export default class GreetingModal extends React.Component {
  render() {
    return (
      <ModalContext.Consumer>
        {
          actions => (
            <Modal onClose={actions.onClose}>
              <div className="num1Mod">
                <h1>Добро пожаловать!</h1>
                <Button
                  type="primary"
                  onClick={actions.onClose}
                >
            Ok
                </Button>
              </div>
            </Modal>
          )
        }
      </ModalContext.Consumer>
    );
  }
}

GreetingModal.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

