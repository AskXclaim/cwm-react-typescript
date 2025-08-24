export type ExpenseListProps = {
    items: { id: string, description: string, currencySymbol: string, amount: number, category: string }[],
    onDeleteExpense: (expenseId: number) => void
}