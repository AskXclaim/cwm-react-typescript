import {Header} from "./components";
import {type ExpenseListDataType} from "./";
import {ExpenseForm, type ExpenseFormDataType} from "./components/ExpenseForm";
import {ExpenseList} from "./components/ExpenseList";
import {useState} from "react";
import ShortUniqueId from "short-unique-id";

const getId = () => {
    const uid = new ShortUniqueId({length: 10});
    return uid.rnd();
}
const ExpenseApp = () => {
    const [expenseList, setExpenseList] = useState<ExpenseListDataType[]>([]);
    const handleAddExpense = (data: ExpenseFormDataType) => {
        console.log(data);
        setExpenseList([...expenseList, {...data, id: getId(), currencySymbol: "£"}]);
        console.log(expenseList);
    }
    const handleDeleteExpense = (expenseId: number) => {
        setExpenseList(expenseList.filter(item => item.id !== expenseId));
    }
    return (
        <div className="container">
            <Header text={"Expense Tracker"}/>
            <div className="m-4">
                <ExpenseForm onAddExpense={handleAddExpense}/>
                <ExpenseList items={expenseList} onDeleteExpense ={handleDeleteExpense}/>
            </div>
        </div>
    )
}

export default ExpenseApp