<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import HelloWorld from '@/components/hello-world.vue';

@Component({
	components: { HelloWorld }
})
export default class Home extends Vue {
	user = 'Gilbert';
}
</script>

<template>
	<div class="home">
		<img alt="Vue logo" src="@/assets/logo.png" />
		<p>{{user}}</p>
		<HelloWorld msg="Welcome to Your Vue.js App" @userUpdated="user = $event" />
	</div>
</template>


