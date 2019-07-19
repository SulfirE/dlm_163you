/*
路由器对象模块
*/

import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../pages/home/home.vue'
import category from '../pages/category/category.vue'
import topic from '../pages/topic/topic.vue'
import cart from '../pages/cart/cart.vue'
import ucenter from '../pages/ucenter/ucenter.vue'

//声明使用vue插件
Vue.use(VueRouter)

export default new VueRouter({//配置对象
    //配置应用中所有的路由
    routes:[
        {
            path:'/home',
            component:home
        },
        {
            path:'/category',
            component:category
        },
        {
            path:'/topic',
            component:topic
        },
        {
            path:'/cart',
            component:cart
        },
        {
            path:'/ucenter',
            component:ucenter
        },
    
        {
            path:'/',//项目根路径
            redirect:'/home'
        }
    ]
})