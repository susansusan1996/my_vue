import { createRouter, createWebHistory } from 'vue-router';
import Stack from '../components/data_structure/Stack.vue';
import Queue from '../components/data_structure/Queue.vue';
import BST from '../components/data_structure/BST.vue';
import Heap from '../components/data_structure/Heap.vue';

const routes = [
    { path: '/', name: 'Home', component: () => import('../components/data_structure/Home.vue') },
    { path: '/stack', name: 'Stack', component: Stack },
    { path: '/queue', name: 'Queue', component: Queue },
    { path: '/bst', name: 'BST', component: BST },
    { path: '/heap', name: 'Heap', component: Heap }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
