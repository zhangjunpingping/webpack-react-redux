import { createModel } from '@rematch/core'

export const table = createModel({
  state: {
    isLogin: '1313'
  },

  reducers: {
    // 在这里写纯函数来改变 state
    updateState(state, payload) {
      return {
        ...state,
        ...payload
      }
    }
  },

  effects: _dispatch => ({
    // 在这里写"不纯"的函数，比如 ajax 请求获取数据
    // 异步请求必须放在此处
  })
})
