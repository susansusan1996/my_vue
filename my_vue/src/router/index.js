import { createRouter, createWebHistory } from 'vue-router';
import Stack from '../components/data_structure/Stack.vue';
import Queue from '../components/data_structure/Queue.vue';
import BST from '../components/data_structure/BST.vue';
import Snake from '../components/game/Snake.vue';
import Mario from '../components/game/Mario.vue';
import Shoot from '../components/game/Shoot.vue';



const routes = [
    { path: '/', name: 'Home', component: () => import('../components/data_structure/Home.vue') },
    { path: '/stack', name: 'Stack', component: Stack },
    { path: '/queue', name: 'Queue', component: Queue },
    { path: '/bst', name: 'BST', component: BST },
    { path: '/snake', name: 'Snake', component: Snake },
    { path: '/mario', name: 'Mario', component: Mario },
    { path: '/shoot', name: 'Shoot', component: Shoot }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
