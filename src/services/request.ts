import axios from 'axios'
import pathToRegexp from 'path-to-regexp'
import { message } from 'antd'
import { camelJson, underscoreJson } from '@/utils/helpers'

message.config({ maxCount: 1 })

// 发送请求前，对数据进行处理
const processRequest = config => {
  if (config.data && !(config.data instanceof FormData)) {
    config.data = underscoreJson(config.data)
  }
  if (config.params) {
    config.params = underscoreJson(config.params)
  }
  return config
}

// 请求返回成功后，对返回数据进行处理
const processResponse = response => {
  if (response.data) {
    response.data = camelJson(response.data)
  }
  return response.data
}

// 请求返回错误后，对错误进行处理
const processResponseError = error => {
  message.error(error.response.status)
  Promise.reject(error)
}
// 对请求进行拦截
axios.interceptors.request.use(
  config => {
    return processRequest(config)
  },
  error => Promise.reject(error)
)

// 对返回进行拦截
axios.interceptors.response.use(
  response => {
    return processResponse(response)
  },
  error => {
    return processResponseError(error)
  }
)

/**
 * 发送请求
 * /api/v1/foo/bar/:id => request(api.xxx, data, {id: 1})
 * /api/v1/foo/bar?id=1 => request(api.xxx, {id: 1})
 * @param api 对象 {url, method}，见 api.ts
 * @param data 需要发送的数据，可以是 querystring(get) 也可以是 body(post, put, ...)
 * @param urlParams 组成 url 的变量
 * @param options 额外的配置选项，同 axios
 */
const request = (
  api: any,
  data?: object,
  urlParams?: object,
  options?: object
) => {
  if (urlParams) {
    api = {
      ...api,
      url: pathToRegexp.compile(api.url)(urlParams)
    }
  }

  let config: any = {
    ...options,
    ...api,
    ...{ url: api.url }
  }

  if (api.method === 'get') {
    config = {
      ...config,
      params: data
    }
  } else {
    config = {
      ...config,
      data
    }
  }
  return axios(config)
}

export { request }
