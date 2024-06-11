const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: '/productos',
        component: () => import('components/ProductsList.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('components/Auth/LoginForm.vue')
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes