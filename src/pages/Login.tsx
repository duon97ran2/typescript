import React from 'react'
import { Form, Button, Checkbox, message, Input, Card } from "antd"
import { login } from '../api/auth';
import { useNavigate } from 'react-router-dom';

type Props = {}

const Login = (props: Props) => {
  const navigate = useNavigate();
  const onFinish = async (post: any) => {
    try {
      const { data } = await login(post);
      message.success(data.message);
      localStorage.setItem("user", JSON.stringify(data));
      setTimeout(() => { navigate("/") }, 3000)
    } catch (error: any) {
      const { response } = error;
      message.error(response.data.message)
    }

  };
  const onFinishFailed = (error: any) => {
    message.error('Some errors happen');
  };
  return (
    <Card title="Login" style={{ margin: "100px auto", width: "400px" }}>
      <Form name='login'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        autoComplete="off"
        initialValues={{ remember: true }}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email"
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password"
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Button type='primary' htmlType='submit'>
            Login
          </Button>
          <Button type='default' htmlType='reset'>
            Reset
          </Button>
        </Form.Item>
      </Form>
    </Card >
  )
}

export default Login