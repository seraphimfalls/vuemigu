import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import home from './home'
import yingdan from './yingdan'
import xiaoshipin from './xiaoshipin'
import yingping from './yingping'
export default new Router({
    routes:[
      home,yingdan,xiaoshipin,yingping
    ]
})
