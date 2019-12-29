<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import PieChart from '@/components/_shared/charts/pie-chart.vue';
import { PieChartValue } from '@/components/_shared/charts/model';

@Component({ components: { PieChart } })
export default class ChartTopExpenses extends Vue {
	data: PieChartValue[] = [
		{ value: 230, color: 'red' },
		{ value: 130, color: 'yellow' },
		{ value: 430, color: 'orange' },
		{ value: 530, color: 'blue' },
		{ value: 130, color: 'gray' },
		{ value: 30, color: 'purple' }
	];
}
</script>

<template>
	<div class="card">
		<div class="card-header">
			Top Expenses (30 days)
			<div class="card-options">
				<i class="fa fa-expand"></i>
			</div>
		</div>
		<div class="card-body chart">
			<PieChart :data="data" :size="250" />
		</div>
	</div>
</template>

<style scoped>
.chart {
	height: 375px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>