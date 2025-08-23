import {getCategoriesAsObjectArray, ExpenseListSelectCategory} from "./index.ts";

const ExpenseList = () => {
    
    return (<div className="d-flex flex-column align-items-start m-2 mt-4">
        <ExpenseListSelectCategory id="expenseListCategories" options={getCategoriesAsObjectArray()}/>
    </div>)
}
export default ExpenseList;