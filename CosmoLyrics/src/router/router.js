import { createRouter, createWebHistory } from 'vue-router'
import MainScreen from '../pages/mainScreen/MainScreen.vue'

const router = createRouter({
  history: createWebHistory(),
  mode: 'hash',
  routes: [
    {
      name: 'MainScreen',
      path: '/',
      component: MainScreen,
      meta: {
        title: 'Главная страница'
      }
    },
    {
      name: 'TopSongs',
      path: '/top_songs',
      component: () => import('../pages/topSongs/TopSongs.vue'),
      meta: {
        title: 'Топ песен'
      }
    },
    {
      name: 'ShowSong',
      path: '/songs/:id',
      component: () => import('../pages/show/ShowSong.vue'),
      props: true,
      meta: {
        title: 'Информация о песне'
      }
    },
    {
      name: 'ShowSinger',
      path: '/singer/:id',
      component: () => import('../pages/show/ShowSinger.vue'),
      props: true,
      meta: {
        title: 'Информация об исполнителе'
      }
    },
    {
      name: 'ShowAlbum',
      path: '/album/:id',
      component: () => import('../pages/show/ShowAlbum.vue'),
      props: true,
      meta: {
        title: 'Информация об альбоме'
      }
    },
    {
      name: 'AdminPage',
      path: '/admin',
      component: () => import('../pages/admin/adminPage.vue'),
      meta: {
        title: 'Админ-панель'
      }
    },
    {
      name: 'AdminMusicStat',
      path: '/admin/music',
      component: () => import('../pages/admin/musicStatistics/musicStat.vue'),
      meta: {
        title: 'Статистика по музыке'
      }
    },
    {
      name: 'AdminAlbumsStat',
      path: '/admin/albums',
      component: () => import('../pages/admin/albumStatistics/albumStat.vue'),
      meta: {
        title: 'Статистика по альбомам'
      }
    },
    {
      name: 'AdminUsersStat',
      path: '/admin/users',
      component: () => import('../pages/admin/userStatistics/userStat.vue'),
      meta: {
        title: 'Статистика по пользователям'
      }
    },
    {
      name: 'Registration',
      path: '/registration',
      component: () => import('../pages/registration/Registration.vue'),
      meta: {
        title: 'Регистрация'
      }
    },
    {
      name: 'Login',
      path: '/login',
      component: () => import('../pages/login/Login.vue'),
      meta: {
        title: 'Авторизация'
      }
    },
    {
      name: '404',
      path: '/:pathMatch(.*)*',
      component: () => import('../pages/error404/Error404.vue'),
      meta: {
        title: 'Ошибочка...'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
