import { useState } from 'react'
import insertPost from '../domain/insertPost'

const useSavePost = () => {
  const [post, setPost] = useState([])

  const savePost = newPost => {
    setPost(insertPost(post, newPost))
  }

  return { post, savePost }
}

export default useSavePost
