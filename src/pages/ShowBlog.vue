<template>
  <div class="showblog">
      <div class="list">
          <div class="item" v-for="m in pageData" :key="m.id">
              <div class="top">
                  <div class="title">{{m.title}}</div>
                  <div class="time">2021-11-28</div>
              </div>
              <div class="center">
                  {{m.body}}
              </div>
              <div class="bottom">
                  <div class="classify"><span>分类：vue.js</span></div>
                  <div class="author"><span>作者：{{m.userId}}</span> </div>
              </div>
          </div>
      </div>
      <div class="pages">
          <div @click="forward">上一页</div>
          <h4>第{{page}}页</h4>
          <div @click="next">下一页</div>
      </div>
  </div>
</template>

<script>
// import axios from 'axios'
import {mapState} from 'vuex'
export default {
    name:'ShowBlog',
    data(){
        return {
        // message:[],
        pageData:[],
        page:1
        }
    },
    created() {
        //将
        this.$store.dispatch('getData')
    },
    mounted() {
        
        //  this.$nextTick(this.jump(this.p))
    },
    computed:{
        ...mapState(['message'])
    },
    watch:{
        message(newvalue){
            this.jump(this.page)
        }
    },
    // mounted() {
    // //    this.getData()
    // this.$bus.$on('addData',this.addData)
    // },
    methods: {
        // getData(){
        //      axios.get('https://jsonplaceholder.typicode.com/posts'
        //      )
        //      .then(
        //     (response)=>{console.log(response.data)
        //     this.message=response.data
        //     //  this.pageData=this.message.slice((this.p-1)*10,this.p*10)
        //     this.jump(this.p)

        //     }
        // )
        
        // },
        jump(n){
            // this.pageData=this.$store.state.message.slice((n-1)*10,n*10)
            this.pageData=this.message.slice((n-1)*10,n*10)
        },
        forward(){
            if(this.page>1){
                this.page--
                // this.pageData=this.message.slice((this.p-1)*10,this.p*10)
                this.jump(this.page)
                window.scrollTo(0,0)
            }else {
                // this.pageData=this.message.slice((this.p-1)*10,this.p*10)
                this.jump(this.page)
            }
        },
        next(){
            if(this.page<(this.message.length/10)){
            this.page++
            // this.pageData=this.message.slice((this.p-1)*10,this.p*10)
            this.jump(this.page)
            window.scrollTo(0,0)
            }
        },
        //事件总线处理
        // addData(value){
        //     this.message.unshift(value)
        //     console.log('收到',value)
        // }
    }
}
</script>

<style scoped>
.showblog{
    min-height: 580px;
    position: relative;
}
.showblog .pages{
    display: flex;
    justify-content: center;
    padding-bottom: 30px;
}
.showblog .pages div{
    padding: 10px 30px;
    margin: 0 10px;
    border: 1px solid rgb(59, 194, 126);
    font-size: 14px;
    color: rgb(59, 194, 126);
    border-radius: 5px;
}
.showblog .pages div:hover{
    background:rgb(59, 194, 126);
    color: #fff;
}

.list{
    padding: 30px;
}
.item{
    margin-bottom: 40px;
}
.top ,.bottom{
    display: flex;
    justify-content: space-between;
}
.title{
    font: 26px;
    color: #333;
}
.time{
    font: 18px;
    color: #666;
}
.center{
    padding: 15px 0;
    padding: 20px;
    background: #F6F6F6;
    border-radius: 4px;
}
.bottom div{
    font-size: 16px;
    color: #666;
}
</style>