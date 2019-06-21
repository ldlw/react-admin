import React,{ Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';

//引入图片资源
import logo from './logo.png';


//缓存一下
const Item= Form.Item;

class  Login extends Component {

  render() {

    return <div className="login">
      <header  className="login-header">
        <img src={logo} alt="logo"/>
        <h1>React项目: 后台管理系统</h1>
      </header>
    </div>
  }
}