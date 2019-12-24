<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
	@Prop() msg?: string;
	@Emit('userUpdated') userUpdated(value: string) {
		return value;
	}

	user = '';
	value = '';
	update($event: any) {
		this.userUpdated($event.target.value);
		this.value = $event.target.value;
	}
}
</script>

<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<input class="form-control" type="text" @keydown="update($event)" />
		<button class="btn btn-primary">abc</button>
	</div>
</template>



<style scoped lang="scss">
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
