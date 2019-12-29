<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class WalletExpense extends Vue {
	value = 30000.25;
	avg = 25;
}
</script>

<template>
	<div class="box-red">
		<div class="d-flex flex-justify-end">
			<h1><i class="fab fa-creative-commons-nc"></i></h1>
			<div class="d-flex flex-column ml-3">
				<span class="caption">Expenses</span>
				<h3>
					<i18n-n :value="value" :format="'currency'" />
				</h3>
			</div>
		</div>
		<span class="caption">Monthly AVG %</span>
		<div class="progress mt-2" data-toggle="tooltip" data-placement="top" :title="`${avg}%`">
			<div class="progress-bar" :style="{width: `${avg}%`}"></div>
		</div>
	</div>

</template>