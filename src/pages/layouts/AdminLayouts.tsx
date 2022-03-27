import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import { Outlet } from "react-router-dom"
import { Layout, Breadcrumb } from 'antd';
type Props = {}

const { Header, Content, Footer } = Layout;


const AdminLayouts = (props: Props) => {
  const [collapse, setCollapse] = useState(false)
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}

export default AdminLayouts