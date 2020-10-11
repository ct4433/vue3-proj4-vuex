import {
  createStore
} from 'vuex'
import {
  UPDATEINFO
} from './mutation-type'

export default createStore({
  state: {
    count: 0, // 具体的状态数据
    students: [{
        id: 110,
        name: 'zzz',
        age: '18'
      },
      {
        id: 111,
        name: 'ttt',
        age: '20'
      },
      {
        id: 112,
        name: 'yyy',
        age: '22'
      },
      {
        id: 113,
        name: 'zty',
        age: '25'
      }
    ],
    user: {
      name: 'zhangsan',
      sex: '男'
    }
  },
  mutations: {
    increment(state, payload) { // 增加
      state.count++
      console.log(payload.message);
    },
    decrement(state) { // 减少
      state.count--
    },
    addStu(state, stu) {
      state.students.push(stu) // 向数组中添加指定的stu
      console.log(state.students.find(s => s.id === stu.id)) // 输出打印查看state中是否有新增stu
    },
    [UPDATEINFO](state, age) {
      state.user.age = age
    },
    updateName(state, name) {
      state.user.name = name
    }
  },
  actions: {
    // context：上下文
    aUpdateInfo(context, name) {
      let msg = '响应成功'
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit(UPDATEINFO, 12)
          resolve(msg)
        }, 1000)
      })
    }
  },
  modules: {},
})