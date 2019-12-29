<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class WalletIncome extends Vue {
	value = 30000.25;
	profitMargin = 75;
}
</script>

<template>
	<div class="box-green">
		<div class="d-flex flex-justify-end">
			<h1><i class="fas fa-hand-holding-usd"></i></h1>
			<div class="d-flex flex-column ml-3">
				<span class="caption">Income</span>
				<h3>
					<i18n-n :value="value" :format="'currency'" />
				</h3>
			</div>
		</div>
		<span class="caption">Monthly AVG %</span>
		<div class="progress mt-2" data-toggle="tooltip" data-placement="top" :title="`${profitMargin}%`">
			<div class="progress-bar" :style="{width: `${profitMargin}%`}"></div>
		</div>
	</div>

</template>