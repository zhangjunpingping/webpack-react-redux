import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Loadable from './loadable'

/**
 * 配置路由
 * 接受如下几种形式
 * (1)'/a/b': 'path/to/module' // 最常用，注意：path/to/module 是相对于 src/modules/ 的路径
 * (2)'/a/c: {component: 'path/to/module', exact: false}  // 增加 exact: false，对路径进行模糊匹配
 * (3)'/a/d': {redirect: '/a/b'}  // 重定向
 */
const config = {
  '/table': 'Table',
  '/form': 'Form',
  '/gould-map': 'GouldMap',
  '/test': 'Test',
  '/biz-charts': 'BizCharts',
  '/': { redirect: '/table' }
}

export const renderRouter = () => {
  return Object.entries(config).map((item: any) => {
    const props: any = {
      exact: true,
      path: item[0]
    }

    if (item[1] instanceof Object) {
      if (item[1].exact === false) {
        props.exact = false
      }

      if (item[1].component) {
        props.component = Loadable(item[1].component)
      }

      if (item[1].redirect) {
        props.render = () => <Redirect to={item[1].redirect} />
      }
    } else {
      props.component = Loadable(item[1])
    }

    return <Route {...props} key={props.path} />
  })
}
