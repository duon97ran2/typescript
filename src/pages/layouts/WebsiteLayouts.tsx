import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';
import { Breadcrumb, Layout, Menu } from 'antd';
import AppHeader from '../../components/AppHeader';
import Search from 'antd/lib/input/Search';
import AppFooter from '../../components/AppFooter';



type Props = {}


const WebsiteLayouts = (props: Props) => {
  const navigate = useNavigate();
  const { Header, Footer, Sider, Content } = Layout;
  const onSearch = (value: any) => console.log(value);
  const [display, setDisplay] = useState<boolean>(false);
  return (

    <div>
      <Layout className="layout">
        <Header>
          <AppHeader onToggle={() => { setDisplay(!display) }} />
          {display && <Search
            placeholder="Input search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />}
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content"><Outlet /></div>
        </Content>
        <Footer style={{ textAlign: 'center' }}><AppFooter /></Footer>
      </Layout>
      {/* <Header />
      <main>
        <Outlet />
      </main>
      <footer>Web Footer</footer> */}
    </div>
  )
}

export default WebsiteLayouts