<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Menu extends Vue {
	show = true;

	toggleMenu() {
		this.show = !this.show;
	}
}
</script>

<template>
	<div class="menu-wrapper" :class="{'show': show}">
		<div class="menu">
			<div class="header">Athena</div>
			<router-link :to="'/home'" :active-class="'active'" class="menu-item">Home</router-link>
			<router-link :to="'/transactions/new'" :active-class="'active'" class="menu-item">New Transaction</router-link>
			<router-link :to="'/about'" :active-class="'active'" class="menu-item">About</router-link>
			<router-link :to="'/login'" :active-class="'active'" class="menu-item">Settings</router-link>
			<router-link :to="'/login'" :active-class="'active'" class="menu-item">Logout</router-link>
		</div>
		<div class="content">
			<nav class="navbar mb-3">
				<button @click="toggleMenu()" class="btn btn-default">
					<i class="fa fa-bars"></i>
				</button>
			</nav>
			<div class="container-fluid">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>