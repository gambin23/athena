import { RouteConfig } from 'vue-router';

export const routes: RouteConfig[] = [
	{
		path: '/login',
		name: 'Login',
		component: () => import('@/pages/login.vue')
	},
	{
		path: '/home',
		name: 'Home',
		component: () => import('@/pages/home.vue')
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('@/pages/about.vue')
	},
	{
		path: '/transactions/new',
		name: 'Transactions',
		component: () => import('@/pages/transaction-new.vue')
	}
];
