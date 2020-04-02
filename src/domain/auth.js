import { clearStorage } from './storage'

const loginUser = () => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve({
          code: 200,
          status: 'success',
          token: '1234567890'
        })
      }, 3000)
    } catch (error) {
      reject(error)
    }
  })
}

const isLoggedIn = () => localStorage.getItem('app')

const handleLogout = history => {
  clearStorage()
  history.push('/')
}

export { loginUser, isLoggedIn, handleLogout }
