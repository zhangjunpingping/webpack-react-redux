import React, { Component } from 'react'
import { Switch, Redirect } from 'react-router-dom'
import { Layout } from 'antd'
import HeaderBar from '../../components/HeaderBar'
import SideMenu from '../../components/SideMenu'
import { renderRouter } from '../../routers'
import './index.less'

const { Content } = Layout

class Main extends Component<null, null> {
  render() {
    return (
      <Layout>
        <HeaderBar />
        <Layout className="content">
          <SideMenu />
          <Content className="right-content slide-style">
            <Switch>
              {renderRouter()}
              <Redirect to="/" />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    )
  }
}
export default Main
