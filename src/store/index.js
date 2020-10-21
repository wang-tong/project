/*
 * @Author: WangTong
 * @Date: 2020-06-30 18:45:48
 * @Last Modified by: WangTong
 * @Last Modified time: 2020-07-02 10:07:31
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  // 不会修改原数据，只会包装原数据；
  getters: {
    showNumber (state) {
      return '当前最新的数量是：' + state.count
    }

  },
  mutations: {
    add (state) {
      // 变更状态
      state.count++
    },
    sub (state) {
      // 变更状态
      state.count--
    }
  },
  // 异步函数
  actions: {
    addAsync (context) {
      setTimeout(() => {
        // 在action中 必须使用commit
        context.commit('add')
      }, 1000)
    },
    subAsync (context) {
      setTimeout(() => {
        // 在action中 必须使用commit
        context.commit('sub')
      }, 1000)
    }
  },
  modules: {}
})
/**
 *
 *
 *
 *
 */
