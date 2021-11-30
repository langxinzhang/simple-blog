import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
const actions={
    getData(context){
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