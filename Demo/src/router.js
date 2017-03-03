// import Vue from 'vue'
import Router from 'vue-router'
/*import StoriesView from './views/StoriesView.vue'
import ArticleView from './views/ArticleView.vue'
import CommentView from './views/CommentView.vue'
import UserView from './views/UserView.vue'*/
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import ThemesView from './views/ThemesView.vue'
import NewsView from './views/NewsView.vue'

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
        { path: '/', redirect: '/home' }
  ]
})
