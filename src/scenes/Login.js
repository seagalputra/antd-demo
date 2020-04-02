import React, { useState } from 'react'
import { Row, Col, Typography, Form, Input, Button, Checkbox, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'

import { loginUser } from '../domain/auth'
import { insertStorage } from '../domain/storage'

const antIcon = (
  <LoadingOutlined style={{ fontSize: 24, color: '#ffffff' }} spin />
)

const Login = () => {
  const [isLoading, setIsLoading] = useState(false)

  const history = useHistory()
  const { Title, Text } = Typography

  const handleLogin = () => {
    setIsLoading(true)
    loginUser().then(data => {
      const { token } = data

      insertStorage('app', token)
      setIsLoading(false)
      history.push('/dashboard')
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
              {isLoading ? <Spin indicator={antIcon} /> : 'Masuk'}
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}

export default Login
