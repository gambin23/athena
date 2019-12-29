import { TransactionStatus } from './transactions-status';
import { TransactionType } from './transaction-type';
import { TransactionCategory } from './transaction-category';

export interface Transaction {
	id: string;
	status: TransactionStatus;
	type: TransactionType;
	category: TransactionCategory;
	subCategory: string;
	value: number;
	description: string;
	entity: string;
	date: Date;
	ref?: string;
}
