import {getCategoriesAsObjectArray, ExpenseListSelectCategory, ExpenseItem, type ExpenseListProps} from "./index.ts";

const ExpenseList = ({items, onDeleteExpense}: ExpenseListProps) => {
    return (<div className="d-flex flex-column align-items-start m-2 mt-4">
        <ExpenseListSelectCategory id="expenseListCategories" options={getCategoriesAsObjectArray()}/>
        <table className="table table-bordered w-75">
            <thead>
            <tr>
                <th scope="col">Description</th>
                <th scope="col">Amount</th>
                <th scope="col">Category</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            {items.map((item) => {
                return (<ExpenseItem key={item.id} id={item.id} description={item.description}
                                     currencySymbol={item.currencySymbol} amount={item.amount}
                                     category={item.category} onDeleteExpense={onDeleteExpense}/>);
            })}
            </tbody>
        </table>
    </div>)
}
export default ExpenseList;