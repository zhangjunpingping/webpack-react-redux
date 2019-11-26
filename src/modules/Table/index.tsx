import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { IRootState, Dispatch } from '@/store'

const mapState = (state: any) => ({
  messageData: state.table.isLogin
})
const mapDispatch = (_dispatch: any) => ({})
class Table extends Component<any, {}> {
  render() {
    return <div>table1///{this.props.messageData}</div>
  }
}

export default connect(mapState, mapDispatch)(Table)
