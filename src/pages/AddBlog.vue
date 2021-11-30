<template>
  <div class="addblog">
      <div class="addmain">
          <div class="row">
              <div class="text">博客标题：</div>
              <div class="intext"><input type="text" v-model="blogObj.title"></div>
          </div>
           <div class="row">
              <div class="text">作者：</div>
              <div class="intext"><input type="text" v-model="blogObj.userId"></div>
          </div>
           <div class="row">
              <div class="text">分类：</div>
              <div class="intext">
                  <select v-model="blogObj.classify">
                      <option value="html">html</option>
                      <option value="css">css</option>
                      <option value="vue.js">vue.js</option>
                  </select>
                </div>
          </div>
           <div class="row rowA">
              <div class="text">内容：</div>
              <div class="intext"><textarea v-model="blogObj.body"></textarea></div>
          </div>
          <div class="row">
              <div class="text"></div>
              <div class="intext"> <button @click="objSubmit">发表博客</button></div>
             
            </div>
          
      </div>
  </div>
</template>

<script>
export default {
    name:'AddBlog',
    data(){
        return{
            blogObj:{
                title:'',
                userId:'',
                classify:'css',
                body:''
            }
        }
    },
    methods:{
        objSubmit(){
            // this.$bus.$emit('addData',this.blogObj)
            this.$store.commit('Adddata',JSON.stringify(this.blogObj))
            console.log(this.blogObj)
            this.$router.push({name:'showblog'})
        }
    }
}
</script>

<style scoped>
.addblog{
    padding: 40px;
    min-height: 500px;
}
.addblog .addmain{
    padding: 0 80px;
    font-size: 18px;
    color: #333;
}
.row{
    display: flex;
    padding: 10px 0;
    align-items: center;
    
}
.addblog .addmain .row .text{
    width: 20%;
    text-align: right;
}
.intext{
    width: 80%;
    font-size: 18px;
    color: #666;
}
.intext input{
    width: 100%;
    height: 40px;
}
.intext textarea{
    width: 100%;
    height: 250px;
}
.intext select{
    width: 50%;
    height: 40px;
}
.rowA{
    align-items: flex-start;
}
.row .intext button{
    width: 50%;
    height: 40px;
    color: #fff;
    background: #378681;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}
.row .intext button:hover{
    background: rgb(21, 116, 62);
}
</style>