import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('@/pages/HomePage.vue'),
  },
  {
    path: '/auth',
    name: 'AuthPage',
    component: () => import('@/pages/AuthPage.vue'),
  },
  {
    path: '/cgu',
    name: 'CGU',
    component: () => import('@/pages/CGU.vue'),
  },
  {
    path: '/humeur',
    name: 'humeur',
    component: () => import('@/pages/Smiley.vue'),
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('@/pages/SmileyDetail.vue'),
  },
  {
    path: '/good',
    name: 'good',
    component: () => import('@/pages/GoodFeelings.vue'),
  },
  {
    path: '/place',
    name: 'place',
    component: () => import('@/pages/Place.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
