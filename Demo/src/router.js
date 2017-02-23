// import Vue from 'vue'
import Router from 'vue-router'
import Home from './pagesVue/home.vue'
import Themes from './pagesVue/themes.vue'
import About from './pagesVue/about.vue'


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
    { path: '/home', component: createStoriesView('home') },
    { path: '/themes', component: createStoriesView('themes') },
    { path: '/about', component: createStoriesView('about') },

  ]
})
