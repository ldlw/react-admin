import React, { Component } from 'react';
import { Icon, Menu } from 'antd';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import menuList from '../../config/menu-config'

import './index.less'
import logo from '../../assets/images/logo.png'

const { SubMenu, Item} = Menu;
export default class LeftNav extends Component {
  static propTypes = {
    collapsed: PropTypes.bool.isRequired
  };

  componentWillMount() {
    //生成菜单
  }

  render() {
    const { collapsed } = this.props;

    return <div>
      <Link className="left-logo" to="/home">
        <img src={logo} alt="logo"/>
        <h1 style={{ display: collapsed ? 'none' : 'block'}}>硅谷后台</h1>
      </Link>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Item key="1">
          <Link to='/home'>
            <Icon type="home" />
            <span>首页</span>
          </Link>
        </Item>
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="appstore" />
              <span>商品</span>
            </span>
          }
        >
          <Item key="/category">
            <Link to='/category'>
              <Icon type="bars" />
              <span>品类管理</span>
            </Link>
          </Item>
          <Item key="4">
            <Icon type="tool" />
            <span>商品管理</span>
          </Item>
        </SubMenu>
        <Item key="5">
          <Icon type="user" />
          <span>用户管理</span>
        </Item>
        <Item key="6">
          <Icon type="user" />
          <span>权限管理</span>
        </Item>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="team" />
                <span>图形图表</span>
              </span>
          }
        >
          <Item key="7">柱形图</Item>
          <Item key="8">折线图</Item>
          <Item key="9">饼图</Item>
        </SubMenu>
      </Menu>
    </div>
  }
}