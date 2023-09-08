import { createRouter, createWebHistory } from "vue-router";
import MainScreen from '../pages/mainScreen/MainScreen.vue';
import TopSongs from '../pages/topSongs/TopSongs.vue'
import Error404 from '../pages/error404/Error404.vue'
import ShowSong from "../pages/show/ShowSong.vue";
import SingerShow from "../pages/show/ShowSinger.vue";
import ShowAlbum from '../pages/show/ShowAlbum.vue'
import adminPage from '../pages/admin/adminPage.vue'
import musicStat from '../pages/admin/musicStatistics/musicStat.vue'
import albumStat from '../pages/admin/albumStatistics/albumStat.vue'
import userStat from '../pages/admin/userStatistics/userStat.vue'
import Registration from "@/pages/registration/Registration.vue";

const router = createRouter({
    history: createWebHistory(),
    mode: "hash",
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
            component: TopSongs,
            meta: {
                title: 'Топ песен'
            }
        },
        {
            name: 'ShowSong',
            path: '/songs/:id',
            component: ShowSong,
            props: true,
            meta: {
                title: 'Информация о песне'
            }
        },
        {
            name: 'ShowSinger',
            path: '/singer/:id',
            component: SingerShow,
            props: true,
            meta: {
                title: 'Информация об исполнителе'
            }
        },
        {
            name: 'ShowAlbum',
            path: '/album/:id',
            component: ShowAlbum,
            props: true,
            meta: {
                title: 'Информация об альбоме'
            }
        },
        {
            name: 'AdminPage',
            path: '/admin',
            component: adminPage,
            meta: {
                title: 'Админ-панель'
            }
        },
        {
            name: 'AdminMusicStat',
            path: '/admin/music',
            component: musicStat,
            meta: {
                title: 'Статистика по музыке'
            }
        },
        {
            name: 'AdminAlbumsStat',
            path: '/admin/albums',
            component: albumStat,
            meta: {
                title: 'Статистика по альбомам'
            }
        },
        {
            name: 'AdminUsersStat',
            path: '/admin/users',
            component: userStat,
            meta: {
                title: 'Статистика по пользователям'
            }
        },
        {
            name: 'Registration',
            path: '/registration',
            component: Registration,
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
            component: Error404,
            meta: {
                title: 'Ошибочка...'
            }
        },
    ]
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
  });

export default router
