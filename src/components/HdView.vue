<template>
  <div class="header">
      <div class="logo">
          <img src="../assets/logo.png" alt="">
      </div>
      <div class="link">
          <router-link to="/show">博客列表</router-link>
          <router-link to="/add">写博客</router-link>
      </div>
  </div>
</template>

<script>
export default {
    name:'HdView'
}
</script>

<style scoped>
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgb(59, 194, 126);
    height: 80px;
}
.header img{
    height: 80px;
    margin:10% 0 0 10%;
}
.header .link{
    margin-right: 20px;
    display: flex;
}
.header .link a{
    display: block;
    padding: 10px 30px;
    margin-left: 10px;
    border-radius: 5px;
    color: #fff;
}
.header .link a:hover{
    background: #fff;
   color:rgb(59, 194, 126) ;
   transition: 0.1s;
}
</style>