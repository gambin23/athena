<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import TransactionsRecent from '@/components/transactions/transactions-recent.vue';

@Component({ components: { TransactionsRecent } })
export default class Home extends Vue {
	user = 'Gilbert';
}
</script>

<template>
	<div class="row">
		<div class="col-lg-4">
			<TransactionsRecent />
		</div>
		<div class="col-lg-4">
			<div>Review</div>
		</div>
		<div class="col-lg-4">
			<div>Lifetime Balance</div>
		</div>
		<div class="col-lg-4">
			<div>Last Month Graph: Expenses vs Income</div>
		</div>
		<div class="col-lg-4">
			<div>Top Income Categories vs Top Expense Categories</div>
		</div>
	</div>
</template>


