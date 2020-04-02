import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { Menu } from 'antd'

import { isLoggedIn } from '../domain/auth'
import { handleLogout } from '../domain/auth'

const styles = {
  logo: {
    width: '120px',
    height: '31px',
    background: 'rgba(255, 255, 255, 0.2)',
    margin: '16px 24px 16px 0',
    float: 'left'
  }
}

const NavigationBar = () => {
  const { logo } = styles
  const history = useHistory()

  return (
    <>
      <div style={logo} />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <NavLink to="/dashboard">Beranda</NavLink>
        </Menu.Item>
        {isLoggedIn() ? (
          <Menu.Item key="2" onClick={() => handleLogout(history)}>
            Logout
          </Menu.Item>
        ) : (
          <Menu.Item key="3">
            <NavLink to="/register">Registrasi</NavLink>
          </Menu.Item>
        )}
      </Menu>
    </>
  )
}

export default NavigationBar
