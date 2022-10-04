import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _708f80be = () => interopDefault(import('../pages/ArticleList.vue' /* webpackChunkName: "pages/ArticleList" */))
const _bd2bae3a = () => interopDefault(import('../pages/ArticleList1.vue' /* webpackChunkName: "pages/ArticleList1" */))
const _53cb007c = () => interopDefault(import('../pages/DiaryPage.vue' /* webpackChunkName: "pages/DiaryPage" */))
const _0d97171c = () => interopDefault(import('../pages/NewArticle.vue' /* webpackChunkName: "pages/NewArticle" */))
const _f5417d08 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/ArticleList",
    component: _708f80be,
    name: "ArticleList"
  }, {
    path: "/ArticleList1",
    component: _bd2bae3a,
    name: "ArticleList1"
  }, {
    path: "/DiaryPage",
    component: _53cb007c,
    name: "DiaryPage"
  }, {
    path: "/NewArticle",
    component: _0d97171c,
    name: "NewArticle"
  }, {
    path: "/",
    component: _f5417d08,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
