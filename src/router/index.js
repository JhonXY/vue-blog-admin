import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import article from '@/components/article'
import tags from '@/components/tags'
import change from '@/components/change'
import articleList from '@/components/articleList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      redirect: '/articleList',
      children: [
            { path: '/article', component: article, name: '文章新建'},
            { path: '/change', component: change, name: '文章修改'},
            { path: '/articleList', component: articleList, name: '文章列表'},
        ]
    }
  ]
})
