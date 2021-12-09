import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)//使用vuex插件
const actions={
    getData(context){
        // 请求数据
        axios.get('https://jsonplaceholder.typicode.com/posts'
        )
        .then(
       (response)=>{console.log(response.data)
        context.commit('GetData',response.data)
    //    this.message=response.data
    //    this.jump(this.p)

       }
   )
   
   },
}
const mutations={
    //处理数据
    GetData(state,value){
        state.message=value
    },
    Adddata(state,value){
        value=JSON.parse(value)
        state.message.unshift(value)
    }
}
const state={
    message:[]
}
const getters={

}
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})