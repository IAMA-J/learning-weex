// import Vue from 'vue'
import Router from 'vue-router'

import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import ThemesView from './views/ThemesView.vue'
import NewsView from './views/NewsView.vue'
import ThemeDetail from './views/ThemeDetail.vue'
import TnewsView from './views/TnewsView.vue'

Vue.use(Router)


export default new Router({
  // mode: 'abstract',
  routes: [
        { path: '/home', component: HomeView },
        { path: '/themes', component: ThemesView },
        {path: '/about', component: AboutView },
        {path: '/news/:id', component: NewsView },
        {path: '/theme/:id', component: ThemeDetail },
        {path: '/tnews/:id', component: TnewsView },
        { path: '/', redirect: '/home' }//默认路径
  ]
})
