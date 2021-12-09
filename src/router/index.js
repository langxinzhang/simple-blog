import VueRouter from 'vue-router'
//引入路由组件
import ShowBlog from '../pages/ShowBlog'
import AddBlog from '../pages/AddBlog'
// 创建并暴露路由器
export default new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/show'//路由重定向
        },
        {
        name:'showblog',
        path:'/show',
        component:ShowBlog
        },
        {
            name:'addblog',
            path:'/add',
            component:AddBlog
            }
    ]
})