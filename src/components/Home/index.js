import Message from '../Message/Message';
import { Button } from 'antd';
import { ModalContext } from '../context';
import GreetingModal from '../GreetingModal/GreetingModal';
import React from 'react';
import LogOut from '../Auth/LogOut';

class Home extends React.Component {
  state = {
    count: 0,
    modalIsOpen: false
  }

  otcroyModal = () => {
    this.setState({
      modalIsOpen: true
    });
  }

  componentDidMount = () => {
    this.otcroyModal();
  }

  onClose = () => {
    this.setState({
      modalIsOpen: false
    });
  }

  onColorReverse() {
    this.setState(prevState => ({
      count: ++prevState.count
    }));
  }

  get contextValue() {
    return { onClose: this.onClose };
  }

  render() {
    return (
      <ModalContext.Provider value={this.contextValue}>
        <div className="container">
          <Message onColorReverse={this.onColorReverse}/>
          {this.state.modalIsOpen &&
          <GreetingModal
            isOpen={this.state.modalIsOpen}
            onClose={this.onClose}
          />
          }
          <h1>{this.state.count}</h1>
          <Button
            type="primary"
            onClick={this.otcroyModal}
          >
            Открыть модальное окно
          </Button>
          <LogOut/>
        </div>
      </ModalContext.Provider>
    );
  }
}

export default Home;
