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
			<div class="heading">Athena</div>
			<div class="list-group list-group-flush">
				<a href="#" class="list-group-item list-group-item-action">Home</a>
			</div>
		</div>
		<div class="content">
			<nav class="navbar navbar-light bg-light">
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