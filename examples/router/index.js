import Vue from 'vue';
import Router from 'vue-router';

// 主要
import Layout from '../components/layout.vue';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/select',
          name: 'select',
          component: () => import(/* webpackChunkName: "Select" */'../components/select/index.vue')
        }
      ]
    }
  ]
})
