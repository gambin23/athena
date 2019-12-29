<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { sortBy } from 'lodash';

import { PieChartValue } from './model';

@Component
export default class PieChart extends Vue {
	@Prop() data!: PieChartValue[];
	@Prop({ default: 250 }) size!: number;

	angleOffset = -90;
	chartData: any = [];
	cx = 80;
	cy = 80;
	radius = 60;
	sortedValues!: PieChartValue[];
	strokeWidth = this.size * 0.1;

	created() {
		this.sortedValues = sortBy(this.data, v => v.color);
		this.sortedValues.map(value => {
			const { x, y } = this.calculateTextCoords(value.value, this.angleOffset);
			this.chartData = [
				...this.chartData,
				{
					degrees: this.angleOffset,
					textX: x,
					textY: y
				}
			];
			this.angleOffset = this.dataPercentage(value.value) * 360 + this.angleOffset;
		});
	}

	get circumference() {
		return 2 * Math.PI * this.radius;
	}

	get adjustedCircumference() {
		return this.circumference - 2;
	}

	get dataTotal() {
		return this.sortedValues.map(v => v.value).reduce((acc: any, val: any) => acc + val);
	}

	calculateStrokeDashOffset(dataVal: any, circumference: any) {
		const strokeDiff = this.dataPercentage(dataVal) * circumference;
		return circumference - strokeDiff;
	}

	calculateTextCoords(dataVal: number, angleOffset: number) {
		const angle = (this.dataPercentage(dataVal) * 360) / 2 + angleOffset;
		const radians = this.degreesToRadians(angle);

		const textCoords: any = {
			x: this.radius * Math.cos(radians) + this.cx,
			y: this.radius * Math.sin(radians) + this.cy
		};
		return textCoords;
	}
	degreesToRadians(angle: any) {
		return angle * (Math.PI / 180);
	}
	dataPercentage(dataVal: any) {
		return dataVal / this.dataTotal;
	}
	percentageString(dataVal: any) {
		return `${Math.round(this.dataPercentage(dataVal) * 100)}%`;
	}
	returnCircleTransformValue(index: any) {
		return `rotate(${this.chartData[index].degrees}, ${this.cx}, ${this.cy})`;
	}
	segmentBigEnough(dataVal: any) {
		return Math.round(this.dataPercentage(dataVal) * 100) > 5;
	}
}
</script>

<template>
	<svg :height="size" :width="size" viewBox="0 0 160 160">
		<g v-for="(value, i) in sortedValues" :key="i">
			<circle :cx="cx" :cy="cy" :r="radius" :stroke="value.color" :stroke-width="strokeWidth" :stroke-dasharray="adjustedCircumference" :stroke-dashoffset="calculateStrokeDashOffset(value.value, circumference)" fill="transparent" :transform="returnCircleTransformValue(i)" />
			<text v-if="segmentBigEnough(value.value)" text-anchor="middle" dy="3px" :x="chartData[i].textX" :y="chartData[i].textY">{{ percentageString(value.value) }}</text>
		</g>
	</svg>
</template>

<style scoped>
text {
	fill: #333;
	font-family: 'Roboto', sans-serif;
	font-size: 0.75rem;
}
</style>