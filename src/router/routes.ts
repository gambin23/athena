export const routes = [
	{
		path: '/login',
		name: 'login',
		component: () => import('../pages/login.vue')
	},
	{
		path: '/home',
		name: 'home',
		component: () => import('../pages/home.vue')
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('../pages/about.vue')
	}
];
