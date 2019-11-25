import React, { PureComponent } from 'react'
import { Layout } from 'antd'

const { Header } = Layout

class HeaderBar extends PureComponent<{}, {}> {
  render() {
    return <Header className="header-content">头部</Header>
  }
}

export default HeaderBar
