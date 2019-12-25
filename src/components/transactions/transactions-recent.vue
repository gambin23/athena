<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import {
	RecentTransaction,
	TransactionStatus,
	TransactionType,
	TransactionCategory,
	data
} from './transactions';

@Component
export default class TransactionsRecent extends Vue {
	transactions: RecentTransaction[] = data;
	category = TransactionCategory;
	type = TransactionType;
}
</script>

<template>
	<div class="card">
		<div class="card-header">
			Transactions
			<div class="card-options">
				<i class="fa fa-expand"></i>
			</div>
		</div>
		<ul class="list-group">
			<li v-for="(transaction, i) in transactions" :key="i" class="list-group-item d-flex" :class="transaction.type === type.Income ? 'mark-green' : 'mark-red'">
				<div class="d-flex flex-grow-1">
					<div class="avatar text-gray mr-3"><i class="fas fa-coins"></i></div>
					<span class="my-auto d-flex flex-column">
						<span>{{transaction.entity}}</span>
						<span class="caption">{{$d(transaction.date, 'short')}} </span>
					</span>
				</div>
				<div class="my-auto font-weight-bold">
					<span>{{transaction.type === type.Income ? '+ ' : '- '}}</span>
					<i18n-n :value="transaction.value" :format="'currency'" />
				</div>
			</li>
		</ul>
	</div>
</template>