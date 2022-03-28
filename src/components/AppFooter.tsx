import { EmailOutlined } from '@mui/icons-material'
import { Button, Col, Form, Input, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}


const AppFooter = (props: Props) => {
  const textStyle = {
    fontSize: "20px",
    marginBottom: "30px"
  }
  return (
    <div style={{ background: "white", padding: "30px", textDecoration: "none" }}>
      <Row>
        <Col span={8}>
          <div className="column" style={{ textAlign: "left", color: "white" }} >
            <h4 style={textStyle}>Find us on</h4>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14895.455922776757!2d105.7467871!3d21.0381278!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x53cefc99d6b0bf6f!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1svi!2s!4v1648484664117!5m2!1svi!2s" width="100%" height="350"></iframe>
          </div>

        </Col>
        <Col span={4} push={2} >
          <div className="column" style={{ textAlign: "left", color: "white" }} >
            <h4 className="" style={textStyle}>Resources</h4>
            <ul style={{ display: "flex", flexDirection: "column", padding: "0" }}>
              <li className="nav-item"><a href="javascript:;" style={textStyle}>About us</a></li>
              <li className="nav-item"><a href="javascript:;" style={textStyle}>Contact us</a></li>
              <li className="nav-item"><a href="javascript:;" style={textStyle}>Blog</a></li>
              <li className="nav-item"><a href="javascript:;" style={textStyle}>License</a></li>
            </ul>
          </div>
        </Col>
        <Col span={4} push={2} >
          <div className="column" style={{ textAlign: "left", color: "white" }} >
            <h4 className="" style={textStyle}>Company</h4>
            <ul style={{ display: "flex", flexDirection: "column", padding: "0" }}>
              <li className="nav-item"><a href="javascript:;" style={textStyle}>Support</a></li>
              <li className="nav-item"><a href="javascript:;" style={textStyle}>Jobs</a></li>
              <li className="nav-item"><a href="javascript:;" style={textStyle}>Privacy</a></li>
              <li className="nav-item"><a href="javascript:;" style={textStyle}>Guides</a></li>
              <li className="nav-item"><a href="javascript:;" style={textStyle}>Pricing</a></li>
            </ul>
          </div>
        </Col>
        <Col span={8}>
          <Form wrapperCol={{ span: 16, offset: 4 }} labelCol={{ span: 40, offset: 12, }} layout="vertical">
            <h4 style={textStyle}>Submit your email to receive our exclusive deals </h4>
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input placeholder="Please input your email" />
            </Form.Item>
            <Form.Item wrapperCol={{ span: 16, offset: 4 }}
            >
              <Button type='primary' style={{ width: "100%" }} >Submit</Button>
            </Form.Item>

          </Form>
        </Col>
      </Row>
      <h5 style={{ background: "#1890ff", marginTop: "20px", padding: "20px", color: "white" }}>@Copyright by duongtaph13476</h5>
    </div >
  )
}

export default AppFooter