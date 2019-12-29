import { Transaction } from '@/models/transaction';
import { TransactionStatus } from '@/models/transactions-status';
import { TransactionType } from '@/models/transaction-type';
import { TransactionCategory } from '@/models/transaction-category';

export const data: Transaction[] = [
	{
		id: '1',
		status: TransactionStatus.Assigned,
		type: TransactionType.Income,
		category: TransactionCategory.Salary,
		subCategory: 'F/T',
		value: 1950,
		date: new Date(),
		description: 'GIG 31/01',
		entity: 'GIG'
	},
	{
		id: '2',
		status: TransactionStatus.Assigned,
		type: TransactionType.Expense,
		category: TransactionCategory.Shopping,
		subCategory: 'Clothes',
		value: 120,
		date: new Date(),
		description: 'GIG 31/01',
		entity: 'Asos'
	},
	{
		id: '3',
		status: TransactionStatus.Assigned,
		type: TransactionType.Expense,
		category: TransactionCategory.Music,
		subCategory: 'Equipment',
		value: 200,
		date: new Date(),
		description: 'Bought a new piano',
		entity: 'Olimpia'
	},
	{
		id: '4',
		status: TransactionStatus.Assigned,
		type: TransactionType.Income,
		category: TransactionCategory.Computer,
		subCategory: 'Software',
		value: 45,
		date: new Date(),
		description: 'Bought Modern Warfare',
		entity: 'Matthew Grima'
	},
	{
		id: '5',
		status: TransactionStatus.Assigned,
		type: TransactionType.Expense,
		category: TransactionCategory.Gambling,
		subCategory: 'Lottery',
		value: 10,
		date: new Date(),
		description: '23-3-5-33-41',
		entity: 'Lotter'
	}
];
