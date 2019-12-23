export const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('../pages/home.vue')
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('../pages/about.vue')
	}
];
