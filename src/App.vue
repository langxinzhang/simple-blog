<template>
  <div id="app">
   <HdView></HdView>
   <!-- 只需要缓存showBlog -->
   <keep-alive include="ShowBlog">
    <router-view ></router-view>
   </keep-alive>
   <FtView></FtView>
  </div>
</template>

<script>
import HdView from './components/HdView'
import FtView from './components/FtView'
export default {
  name: 'App',
  components: {
    HdView,
    FtView
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
#app{
  width: 1000px;
  box-sizing: border-box;
  margin: 0 auto;
  box-shadow: 0 0 5px rgb(59, 194, 126);
  overflow: hidden;
}
a{
  text-decoration: none;
}
</style>
