export type ExpenseListProps = {
    items: { id: string, description: string, currencySymbol: string, amount: number, category: string }[],
    onDeleteExpense: (expenseId: string) => void,
    onCategoryChange: (category: string) => void,
}