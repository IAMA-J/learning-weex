// import Vue from 'vue'
import Router from 'vue-router'

import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import ThemesView from './views/ThemesView.vue'
import NewsView from './views/NewsView.vue'
import ThemeDetail from './views/ThemeDetail.vue'
import TnewsView from './views/TnewsView.vue'

Vue.use(Router)

// Story view factory
function createStoriesView (type) {
  return {
    name: `${type}-stories-view`,
    render (createElement) {
      return createElement(StoriesView, { props: { type }})
    }
  }
}

export default new Router({
  // mode: 'abstract',
  routes: [
    /*{ path: '/top', component: createStoriesView('top') },
    { path: '/new', component: createStoriesView('new') },
    { path: '/show', component: createStoriesView('show') },
    { path: '/ask', component: createStoriesView('ask') },
    { path: '/job', component: createStoriesView('job') },
    { path: '/article/:url(.*)?', component: ArticleView },
    { path: '/item/:id(\\d+)', component: CommentView },
    { path: '/user/:id', component: UserView },*/

        { path: '/home', component: HomeView },
        { path: '/themes', component: ThemesView },
        {path: '/about', component: AboutView },
        {path: '/news/:id', component: NewsView },
        {path: '/theme/:id', component: ThemeDetail },
        {path: '/tnews/:id', component: TnewsView },
        { path: '/', redirect: '/home' }
  ]
})
