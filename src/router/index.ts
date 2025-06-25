import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

import LoginPage from '@/pages/login/LoginPage.vue'
import NotFound from '@/pages/not-found.vue'
import HomePage from '@/pages/HomePage.vue'

// Lazy-loaded views
const AdminDashboard = () => import('@/pages/admin/AdminDashboard.vue')
const AdminUsers = () => import('@/pages/admin/UsersPage.vue')
const AdminReports = () => import('@/pages/admin/ReportsPage.vue')
const AdminAnalytics = () => import('@/pages/admin/AnalyticsPage.vue')
const AdminPayments = () => import('@/pages/admin/PaymentsPage.vue')

const UserDashboard = () => import('@/pages/user/DashboardPage.vue')
const UserProfile = () => import('@/pages/user/ProfilePage.vue')
const UserAnalytics = () => import('@/pages/user/AnalyticsPage.vue')

const routes = [
  { path: '/login', component: LoginPage },
  { path: '/', component: HomePage },
  {
    path: '/admin',
    component: DefaultLayout,
    meta: { requiresAuth: true, role: 'admin' },
    children: [
      { path: '', component: AdminDashboard, meta: { title: 'Admin Dashboard' } },
      { path: 'users', component: AdminUsers, meta: { title: 'Users' } },
      { path: 'reports', component: AdminReports, meta: { title: 'Reports' } },
      { path: 'analytics', component: AdminAnalytics, meta: { title: 'Analytics' } },
      {
        path: 'payments',
        component: AdminPayments,
        meta: { requiresAuth: true, role: 'admin', title: 'Payments' },
      },
    ],
  },
  {
    path: '/user',
    component: DefaultLayout,
    meta: { requiresAuth: true, role: 'user' },
    children: [
      { path: '', component: UserDashboard, meta: { title: 'User Dashboard' } },
      {
        path: 'wallet',
        component: () => import('@/pages/user/WalletPage.vue'),
        meta: { requiresAuth: true, role: 'user', title: 'Wallet' },
      },
      { path: 'profile', component: UserProfile, meta: { title: 'Profile' } },
      {
        path: 'recharge',
        component: () => import('@/pages/user/RechargePage.vue'),
        meta: { requiresAuth: true, role: 'user', title: 'Recharge' },
      },
      {
        path: 'payments',
        component: () => import('@/pages/user/PaymentPage.vue'),
        meta: { requiresAuth: true, role: 'user', title: 'Payment' },
      },
      {
        path: 'transactions',
        component: () => import('@/pages/user/TransactionsPage.vue'),
        meta: { requiresAuth: true, role: 'user', title: 'Transactions' },
      },
      {
        path: 'analytics',
        component: UserAnalytics,
        meta: { requiresAuth: true, role: 'user', title: 'Analytics' },
      },
      {
        path: 'money-transfer',
        component: () => import('@/pages/user/MoneyTransferPage.vue'),
        meta: { requiresAuth: true, role: 'user', title: 'Money Transfer' },
      },
    ],
  },
  { path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, _, next) => {
  const store = useUserStore()
  const isAuthenticated = store.isAuthenticated || !!localStorage.getItem('token')
  const role = store.role || localStorage.getItem('role')

  // Redirect authenticated users away from login page
  if (to.path === '/login' && isAuthenticated) {
    return next(role === 'admin' ? '/admin' : '/user')
  }

  if (to.meta.requiresAuth && !isAuthenticated) {
    return next('/login')
  }

  if (to.meta.role && role !== to.meta.role) {
    return next('/login')
  }

  next()
})

export default router
