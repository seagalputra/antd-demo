import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'antd'

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

  return (
    <>
      <div style={logo} />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <NavLink to="/">Beranda</NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to="/register">Registrasi</NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <NavLink to="/login">Login</NavLink>
        </Menu.Item>
      </Menu>
    </>
  )
}

export default NavigationBar
