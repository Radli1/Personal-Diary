import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _708f80be = () => interopDefault(import('../pages/ArticleList.vue' /* webpackChunkName: "pages/ArticleList" */))
const _53cb007c = () => interopDefault(import('../pages/DiaryPage.vue' /* webpackChunkName: "pages/DiaryPage" */))
const _bbf39e94 = () => interopDefault(import('../pages/ModalComponent.vue' /* webpackChunkName: "pages/ModalComponent" */))
const _0d97171c = () => interopDefault(import('../pages/NewArticle.vue' /* webpackChunkName: "pages/NewArticle" */))
const _71445500 = () => interopDefault(import('../pages/Pagination.vue' /* webpackChunkName: "pages/Pagination" */))
const _4919a38e = () => interopDefault(import('../pages/Search.vue' /* webpackChunkName: "pages/Search" */))
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
    path: "/DiaryPage",
    component: _53cb007c,
    name: "DiaryPage"
  }, {
    path: "/ModalComponent",
    component: _bbf39e94,
    name: "ModalComponent"
  }, {
    path: "/NewArticle",
    component: _0d97171c,
    name: "NewArticle"
  }, {
    path: "/Pagination",
    component: _71445500,
    name: "Pagination"
  }, {
    path: "/Search",
    component: _4919a38e,
    name: "Search"
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
