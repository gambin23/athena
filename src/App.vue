<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Menu from '@/components/menu/menu.vue';

@Component({ components: { Menu } })
export default class App extends Vue {
	isAuthenticated = false;
}
</script>

<template>
	<div id="app">
		<Menu></Menu>
	</div>
</template>

<style lang="scss">
@import '@/ui/ui-kit';
</style>
