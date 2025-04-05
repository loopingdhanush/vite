import { createRouter, createWebHistory } from 'vue-router'
import Homeview from '@/views/homeview.vue';
import jobsview from '@/views/jobsview.vue';
import Notfoundview from '@/components/notfoundview.vue';
import jobview from '@/views/jobview.vue';
import Addjobview from '@/views/addjobview.vue';
import Editjobview from '@/views/editjobview.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            name:'home',
            component: Homeview,
        },
        {
            path:'/jobs',
            name:'jobs',
            component: jobsview,
        },
        {
            path:'/jobs/:id',
            name:'job',
            component: jobview,
        },
        {
            path:'/jobs/add',
            name:'add-job',
            component: Addjobview,
        },
        {
            path:'/jobs/edit/:id',
            name:'edit-job',
            component: Editjobview,
        },
        {
            path:'/:catchAll(.*)',
            name:'not-found',
            component: Notfoundview,
        },
    ],
});

export default router   