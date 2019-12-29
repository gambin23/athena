<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import WalletBalance from '@/components/wallet/wallet-balance.vue';
import WalletIncome from '@/components/wallet/wallet-income.vue';
import WalletExpenses from '@/components/wallet/wallet-expenses.vue';
import WalletTransactions from '@/components/wallet/wallet-transactions.vue';
import TransactionsRecent from '@/components/transactions/transactions-recent.vue';
import TransactionsReview from '@/components/transactions/transactions-review.vue';
import ChartTopExpenses from '@/components/charts/chart-transaction-types.vue';

@Component({
	components: {
		WalletBalance,
		WalletIncome,
		WalletExpenses,
		WalletTransactions,
		TransactionsRecent,
		TransactionsReview,
		ChartTopExpenses
	}
})
export default class Home extends Vue {}
</script>

<template>
	<div>
		<div class="row">
			<div class="col-lg-3">
				<WalletBalance />
			</div>
			<div class="col-lg-3">
				<WalletIncome />
			</div>
			<div class="col-lg-3">
				<WalletExpenses />
			</div>
			<div class="col-lg-3">
				<WalletTransactions />
			</div>
		</div>
		<div class="row">
			<div class="col-lg-4">
				<TransactionsRecent />
			</div>
			<div class="col-lg-4">
				<TransactionsReview />
			</div>
			<div class="col-lg-4">
				<ChartTopExpenses />
			</div>
			<div class="col-lg-4">
				<div>Top Income Categories vs Top Expense Categories</div>
			</div>
		</div>
	</div>
</template>


