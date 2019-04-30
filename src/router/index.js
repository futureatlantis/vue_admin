import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/Index'
import Content from '@/page/Content'
import ContentList from '@/page/ContentList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/Content',
          name: 'Content',
          component: Content,
        },
        {
          path: '/ContentList/:id',
          name: 'ContentList',
          component: ContentList,
        }
      ]
    }
  ]
})