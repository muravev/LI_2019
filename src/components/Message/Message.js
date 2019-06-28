import React from 'react';
import PropTypes from 'prop-types';
import './message.css';

const cvet = [
  '#666',
  '#ff00ff',
  '#FFA500',
  '#222',
  '#ffff00'
];

class Message extends React.Component{
  numberMessage  = NaN;
  state = {
    cvet: cvet[0]
  }

  cvetTitle = React.createRef();

  componentDidUpdate = () => { this.props.oncvetReverse();}

  reversecvet = () => {
    this.setState({ cvet: cvet[Math.floor(Math.random() * cvet.length)]
    });
  }
  componentDidMount = () => {
    if (this.numberMessage === this.state.cvet){this.callback = () => {
        console.log(this.state.cvet);
      };
    }
    this.cvetTitle.current.addEventListener('click', this.callback);
  }

  componentWillUnmount = () => {
    this.cvetTitle.current.removeEventListener('click', this.callback);
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    return ( nextProps.title !== this.props.title || nextState.cvet !== this.state.cvet
    );
  }

  render() {
    return <div
      className="zagolovok"onClick={this.reversecvet} style={{cvet: this.state.cvet}} ref={this.cvetTitle}>
{this.props.title}</div>;
  }
}

Message.defaultProps = {
  title: 'Hello World!'
};
Message.propTypes = {
  title: PropTypes.string,
  oncvetReverse: PropTypes.func.isRequired
};
export default Message;
