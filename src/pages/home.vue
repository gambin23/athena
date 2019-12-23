<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import HelloWorld from '@/components/hello-world.vue';

@Component({ components: { HelloWorld } })
export default class Home extends Vue {}
</script>

<template>
	<div class="home">
		<img alt="Vue logo" src="@/assets/logo.png" />
		<HelloWorld msg="Welcome to Your Vue.js App" />
	</div>
</template>


