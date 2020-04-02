import React from 'react'
import { Row, Col, Form, Input, DatePicker, Typography, Button } from 'antd'

const Registration = () => {
  const { Title, Text } = Typography

  const submitForm = values => {
    const birthDate = values.birthDate.format('YYYY-MM-DD')

    console.log({
      ...values,
      birthDate
    })
  }

  return (
    <Row justify="center">
      <Col span={10}>
        <Title level={3}>Registrasi</Title>
        <Text type="secondary">Isi data diri anda dengan benar dan tepat.</Text>

        <Form
          style={{ marginTop: '1em' }}
          layout="vertical"
          onFinish={submitForm}
        >
          <Form.Item name="fullName" label="Nama Lengkap">
            <Input placeholder="Masukkan nama lengkap anda" />
          </Form.Item>

          <Form.Item name="nickName" label="Nama Panggilan">
            <Input placeholder="Masukkan nama panggilan anda" />
          </Form.Item>

          <Form.Item name="username" label="Username">
            <Input placeholder="Masukkan username anda" />
          </Form.Item>

          <Form.Item name="password" label="Password">
            <Input.Password placeholder="Masukkan password minimal 8 karakter" />
          </Form.Item>

          <Form.Item label="Tempat/Tanggal Lahir">
            <Form.Item
              name="birthPlace"
              style={{
                display: 'inline-block',
                width: 'calc(50% - 8px)'
              }}
            >
              <Input placeholder="Masukkan tempat lahir anda" />
            </Form.Item>
            <Form.Item
              name="birthDate"
              style={{
                display: 'inline-block',
                width: 'calc(50% - 8px)',
                margin: '0 8px'
              }}
            >
              <DatePicker />
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}

export default Registration
