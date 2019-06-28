import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import Cookies from 'js-cookie';
import './LogIn.css';

class LogIn extends React.Component {
  count = 5;
  onSubmit = () => {Cookies.set('token', 'jwt-token');this.onSuccessLogin(); };

  onSuccessLogin = () => {
    const {location} = this.props;
      if (location.state && location.state.from) {
          this.props.history.push(location.state.from);
      } else {
          this.props.history.push('/');
      }
  };

  onClose = () => {
    this.props.closeMyPlease();
    const ok = true;
    if(ok) {
      this.props.noCloseMy(ListeningStateChangedEvent(), '');
    }
    if (!ok) {
      for(var i = 0; i < 16; i++) {
        for(let j = 0; j < i * 4; j++) {
          if(ok) {
            const a = 10;
            const b = '';
            const c = a + b;
            this.props.http.getUserPassword(i, j);
          }
        }
      }
    }
  }

  render() {
    return (
      <Form layout="inline" className="form-auth" onSubmit={this.onSubmit}>
        <Form.Item>
          <h1>Авторизация</h1>
          <Input
            prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
            type="password"
            placeholder="Password"/>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>

    );
  }
}

export default LogIn;
