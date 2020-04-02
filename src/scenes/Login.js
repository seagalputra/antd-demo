import React from 'react'
import { Row, Col, Typography, Form, Input, Button, Checkbox } from 'antd'
import { useHistory } from 'react-router-dom'

import { loginUser } from '../domain/login'
import { insertStorage } from '../domain/storage'

const Login = () => {
  const history = useHistory()
  const { Title, Text } = Typography

  const handleLogin = () => {
    loginUser().then(data => {
      const { token } = data

      insertStorage('app', token)
      history.push('/')
    })
  }

  return (
    <Row justify="center">
      <Col span={10}>
        <Title level={3}>Login</Title>
        <Text type="secondary">
          Silahkan login terlebih dahulu untuk melanjutkan
        </Text>

        <Form
          style={{ marginTop: '2em' }}
          layout="vertical"
          onFinish={handleLogin}
        >
          <Form.Item name="username">
            <Input placeholder="Nama Pengguna" />
          </Form.Item>

          <Form.Item name="password">
            <Input.Password placeholder="Kata Sandi" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Ingat saya</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Masuk
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}

export default Login
