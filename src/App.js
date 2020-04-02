import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'

import NavigationBar from './components/NavigationBar'
import Home from './scenes/Home'
import Registration from './scenes/Registration'
import Login from './scenes/Login'

const styles = {
  content: {
    backgroundColor: 'white',
    paddingTop: '3em'
  }
}

const App = () => {
  const { content } = styles
  const { Header, Content } = Layout

  return (
    <Router>
      <Layout>
        <Header>
          <NavigationBar />
        </Header>
        <Content style={content}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" component={Registration} />
            <Route path="/login" component={Login} />
          </Switch>
        </Content>
      </Layout>
    </Router>
  )
}

export default App
