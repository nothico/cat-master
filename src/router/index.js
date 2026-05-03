import { createRouter, createWebHistory } from 'vue-router'
import CafeLayout from '../layouts/CafeLayout.vue'
import AdminLayout from '../layouts/AdminLayout.vue'
import TopView from '../views/TopView.vue'
import CatStaffView from '../views/CatStaffView.vue'
import AdminView from '../views/AdminView.vue'
import LoginView from '../views/LoginView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      component: CafeLayout,
      children: [
        { path: '', component: TopView, meta: { title: 'CHOCOTA CAFE' } },
        { path: 'catstaff', component: CatStaffView, meta: { title: '猫スタッフ紹介 | CHOCOTA CAFE' } },
        { path: 'contact', component: ContactView, meta: { title: 'お問い合わせ | CHOCOTA CAFE' } },
      ]
    },
    {
      path: '/login',
      component: LoginView,
      meta: { title: '管理者ログイン | CHOCOTA CAFE' }
    },
    {
      path: '/admin',
      component: AdminLayout,
      children: [
        { path: '', component: AdminView, meta: { title: '管理画面 | CHOCOTA CAFE' } },
      ]
    }
  ],
})

router.beforeEach((to) => {
  document.title = to.meta.title || 'CHOCOTA CAFE'

  // ハンバーガーメニューを閉じる
  if (window.$) {
    window.$('#hamburger').removeClass('open')
    window.$('#nav-menu').removeClass('open')
  }

  const isLoggedIn = sessionStorage.getItem('isLoggedIn')
  if (to.path.startsWith('/admin') && !isLoggedIn) {
    return '/login'
  }
})

export default router