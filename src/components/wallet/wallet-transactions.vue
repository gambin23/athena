<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class WalletTransactions extends Vue {
	value = 121;
	profitMargin = 75;
}
</script>

<template>
	<div class="box">
		<div class="d-flex flex-justify-end">
			<h1><i class="fas fa-chart-line"></i></h1>
			<div class="d-flex flex-column ml-3">
				<span class="caption">Total Transactions</span>
				<h3>
					<i18n-n :value="value" />
				</h3>
			</div>
		</div>
		<span class="caption">MONTHLY AVG %</span>
		<div class="progress mt-2" data-toggle="tooltip" data-placement="top" :title="`${profitMargin}%`">
			<div class="progress-bar" :style="{width: `${profitMargin}%`}"></div>
		</div>
	</div>

</template>