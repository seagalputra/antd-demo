import React from 'react'
import { Row, Col, Card } from 'antd'

import useSavePost from '../hooks/useSavePost'

import PostForm from '../components/PostForm'
import ListPost from '../components/ListPost'

const Home = () => {
  const { post, savePost } = useSavePost()

  return (
    <Row justify="center">
      <Col span={12}>
        <PostForm savePost={savePost} />
        <Card>
          <ListPost data={post} />
        </Card>
      </Col>
    </Row>
  )
}

export default Home
