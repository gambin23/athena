<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Login extends Vue {
	isAuthenticated = false;
}
</script>

<template>
	<div class="row">
		<div class="col">
			<form v-if="!isAuthenticated">
				<div class="form-group">
					<label for="exampleInputEmail1">Email address</label>
					<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
					<small
						id="emailHelp"
						class="form-text text-muted"
					>We'll never share your email with anyone else.</small>
				</div>
				<div class="form-group">
					<label for="exampleInputPassword1">Password</label>
					<input type="password" class="form-control" id="exampleInputPassword1" />
				</div>
				<div class="form-group form-check">
					<input type="checkbox" class="form-check-input" id="exampleCheck1" />
					<label class="form-check-label" for="exampleCheck1">Remember password</label>
				</div>
				<button type="submit" class="btn btn-primary">Login</button>
			</form>
		</div>
	</div>
</template>


