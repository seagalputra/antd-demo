import React from 'react'
import { List } from 'antd'

const ListPost = ({ data }) => {
  return (
    <List
      locale={{ emptyText: 'Tidak ada post' }}
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta title={item.title} description={item.post} />
        </List.Item>
      )}
    />
  )
}

export default ListPost
