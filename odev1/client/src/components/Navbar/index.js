import { Menu } from "antd";
import { AppstoreAddOutlined, HomeOutlined} from '@ant-design/icons';
import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <Menu theme="dark"  mode="horizontal">
        <Menu.Item key="home" icon={<HomeOutlined />}>
         <NavLink to="/">Home</NavLink>
        </Menu.Item>
        <Menu.Item key="new" icon={<AppstoreAddOutlined />}>
        <NavLink to="/addNewEvent">Add New Event</NavLink> 
        </Menu.Item>
     
      </Menu>
    
  );
}

export default Navbar;
