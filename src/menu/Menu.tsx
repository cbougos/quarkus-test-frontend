import React, { ReactNode } from 'react';
import './Menu.css';
import { pushRotate as Menu } from 'react-burger-menu';

class HomePage extends React.Component {
  public render(): ReactNode {
    return (
      <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="users" className="menu-item" href="/users">Users</a>
      </Menu>
    );
  }
}
export default HomePage;
