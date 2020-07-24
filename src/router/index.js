import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import vx from '@/components/vx'
import table1 from '@/components/table1'
import bing1 from '@/components/bing1'
import bing2 from '@/components/bing2'

import index_0 from '@/components/index_0/index_0'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'vx',
      component: vx
    },
    {
      path: '/index_0',
      name: 'index_0',
      component: index_0
    }
  ]
})
