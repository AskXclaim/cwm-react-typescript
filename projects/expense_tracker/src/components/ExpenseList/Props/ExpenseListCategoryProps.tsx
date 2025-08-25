export type ExpenseListCategoryProps = {
    id: string,
    options: { value: string, text: string }[],
    onSelection: (category: string) => void
}