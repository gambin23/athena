<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import RecentTransactions from '@/components/recent-transactions/recent-transactions.vue';

@Component({ components: { RecentTransactions } })
export default class Home extends Vue {
	user = 'Gilbert';
}
</script>

<template>
	<div class="row">
		<div class="col-lg-4">
			<RecentTransactions />
		</div>
		<div class="col-lg-4">
			<div>Unassigned Transactions</div>
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


