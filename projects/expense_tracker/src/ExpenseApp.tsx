import {Header} from "./components";
import {ExpenseForm} from "./components/ExpenseForm";
import {ExpenseList, expenseListDummyData} from "./components/ExpenseList";

const ExpenseApp = () => {
    return (
        <div className="container">
            <Header text={"Expense Tracker"}/>
            <div className="m-4">
                <ExpenseForm/>
                <ExpenseList items={expenseListDummyData}/>
            </div>
        </div>
    )
}

export default ExpenseApp