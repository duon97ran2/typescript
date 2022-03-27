import { ConfigProvider, Dropdown, Menu } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./AppHeader.css"
import { SearchOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons"

type Props = {
  onToggle: () => void
}
ConfigProvider.config({
  theme: {
    primaryColor: "green",
  }
});
const AppHeader = (props: Props) => {
  const pageLink = [
    {
      name: "Home",
      to: "/"
    },
    {
      name: "Products",
      to: "/products"
    },
    {
      name: "About",
      to: "/about"
    }
  ];
  const [menu, setMenu] = useState(<Menu>
    <Menu.Item>
      <Link to={"/login"}>Login</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to={"/register"}>Register</Link>
    </Menu.Item>
  </Menu>)
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setMenu(<Menu>
        <Menu.Item>
          <Link to={"/admin"}>Admin</Link>
        </Menu.Item>
        <Menu.Item onClick={() => {
          localStorage.removeItem("user");
        }}>
          Log out
        </Menu.Item>
      </Menu>)
    } else {
      setMenu(<Menu>
        <Menu.Item>
          <Link to={"/login"}>Login</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={"/register"}>Register</Link>
        </Menu.Item>
      </Menu>)
    }
  }, [(localStorage.getItem("user"))]);
  return (

    <div className="appHeader" >
      <div className="logo"><img src="https://assets-global.website-files.com/5e3177cecf36f6591e4e38cb/5ea2a86505e63bdd814cf868_Logo.png" alt="" />
      </div>
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
        {pageLink.map((page, index) => {
          const key = index + 1;
          return <Menu.Item key={key}> <Link style={{ textDecoration: "none" }} to={page.to}>{page.name}</Link> </Menu.Item>;
        })}
      </Menu>
      <div className='nav-icon'>
        <ul>
          <li><SearchOutlined onClick={props.onToggle} /></li>
          <li><ShoppingCartOutlined /></li>
          <li> <span>Hello</span> </li>
          <li><Dropdown overlay={menu} placement="bottom" arrow={{ pointAtCenter: true }}>
            <UserOutlined />
          </Dropdown></li>
        </ul>
      </div>
    </div >
  )
}

export default AppHeader