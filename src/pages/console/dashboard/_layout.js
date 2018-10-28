import React from 'react'
import styles from './index.less'
import { Menu, Icon } from 'antd';
import { withRouter } from 'react-router';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


// TODO: add a homepage to show analytics

@withRouter
export default class DashBoard extends React.Component {

  componentDidMount() {
    if (this.props.location.pathname === '/console/dashboard') {
      this.props.history.push(`/console/dashboard/lifestyle`)
    }
  }

  handleClick = e => {
    console.log('e : ', e );
    this.props.history.push(`/console/dashboard/${e.key}`)
  }

  render() {
    return (
      <div className={styles.container}>
        <Menu
          onClick={this.handleClick}
          defaultSelectedKeys={['lifestyle']}
          defaultOpenKeys={['sub1']}
          theme="dark"
          mode="inline"
        >
          <SubMenu key="sub1" title={<span><Icon type="folder-open" /><span>Materials</span></span>}>
            <Menu.Item key="lifestyle">LifeStyle</Menu.Item>
            <Menu.Item key="painting">Painting</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="setting" /><span>Settings</span></span>}>
            <Menu.Item key="password">Login Password</Menu.Item>
          </SubMenu>
        </Menu>

        <div className={styles.content}>
          { this.props.children }
        </div>
      </div>
    )
  }
}