import React from 'react'
import { Form, Input, Button } from 'antd'

const PostForm = ({ savePost }) => {
  const [form] = Form.useForm()

  const onSubmit = values => {
    savePost(values)
  }

  return (
    <Form layout="vertical" form={form} onFinish={onSubmit}>
      <Form.Item name="title" label="Judul" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="post" label="Post" rules={[{ required: true }]}>
        <Input.TextArea />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Simpan
        </Button>
      </Form.Item>
    </Form>
  )
}

export default PostForm
