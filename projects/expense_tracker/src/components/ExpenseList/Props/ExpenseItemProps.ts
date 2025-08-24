export type ExpenseItemProps = {
    id: string,
    description: string,
    amount: number,
    category: string,
    currencySymbol: string,
    onDeleteExpense: (expenseId: number) => void
}
