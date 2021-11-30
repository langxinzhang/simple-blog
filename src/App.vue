<template>
  <div id="app">
   <HdView></HdView>
   只需要缓存
   <keep-alive include="ShowBlog">
    <router-view ></router-view>
   </keep-alive>
  
   <HtView></HtView>
  </div>
</template>

<script>
import HdView from './components/HdView'
import HtView from './components/FtView'
// import ShowBlog from './components/ShowBlog'
export default {
  name: 'App',
  components: {
    HdView,
    HtView
    // ShowBlog
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
