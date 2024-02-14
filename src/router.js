import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import EventList from './pages/EventList.vue';
import EventDetail from './pages/EventDetail.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },
        {
            path: '/events',
            name: 'events',
            component: EventList
        },
        // I dati saranno disponibili nel componente come: $route.params.id
        // {
        //     path: '/eventi/:id',
        //     name: 'event-details',
        //     component: EventDetails
        // },
        // I dati saranno disponibili come: id
        // Necessita di una props["id"] nel componente
        {
            path: '/events/:id',
            name: 'event-detail',
            component: EventDetail,
            props: true
        }
    ]
});

export { router };