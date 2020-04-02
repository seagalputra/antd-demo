import { insertPost } from '../domain/post'

describe('Insert Post function', () => {
  it('insert new post', () => {
    const newPost = { title: 'Title 1', post: 'Post 1' }
    expect(insertPost([], newPost)).toContainEqual({
      title: 'Title 1',
      post: 'Post 1'
    })
  })

  it('append new item when there are previous post', () => {
    const newPost = { title: 'Title 2', post: 'Post 2' }
    const prevList = [{ title: 'Title 1', post: 'Post 1' }]

    expect(insertPost(prevList, newPost)).toEqual([
      { title: 'Title 1', post: 'Post 1' },
      { title: 'Title 2', post: 'Post 2' }
    ])
  })
})
