export type ExpenseFormSelectGroupProps = {
    labelDescription: string,
    selectId: string,
    options: {value:string, text:string}[],
    register?: any,
    errors?: any
}