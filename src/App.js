import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './routes/PrivateRoute'
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
            <Route path="/" exact component={Login} />
            <Route path="/register" exact component={Registration} />
            <PrivateRoute path="/dashboard" exact component={Home} />
          </Switch>
        </Content>
      </Layout>
    </Router>
  )
}

export default App
