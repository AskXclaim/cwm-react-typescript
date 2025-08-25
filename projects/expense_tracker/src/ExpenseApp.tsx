import "./ExpenseApp.css";
import {Header} from "./components";
import {type ExpenseListDataType} from "./";
import {ExpenseForm, type ExpenseFormDataType} from "./components/ExpenseForm";
import {Categories, ExpenseList} from "./components/ExpenseList";
import {useState} from "react";
import ShortUniqueId from "short-unique-id";

const getId = () => {
    const uid = new ShortUniqueId({length: 10});
    return uid.rnd();
}
let expensesMasterList: ExpenseListDataType = [];
const ExpenseApp = () => {
    const [expenseList, setExpenseList] = useState<ExpenseListDataType>([]);
    
    const handleAddExpense = (data: ExpenseFormDataType) => {
        expensesMasterList.push({...data, id: getId(), currencySymbol: "£"});
        setExpenseList([...expensesMasterList]);
    }
    const handleDeleteExpense = (expenseId: string) => {
        expensesMasterList = expensesMasterList.filter(item => item.id !== expenseId);
        setExpenseList([...expensesMasterList]);
    }
    const handleCategoryChange = (category: string = Categories.AllCategories) => {
        if (category === Categories.AllCategories) {
            setExpenseList([...expensesMasterList]);
        } else {
            setExpenseList([...(expensesMasterList.filter(item => item.category === category))]);
        }
    }

    return (
        <div className="container max-width-500px min-width-300px">
            <Header text={"Expense Tracker"}/>
            <div className="m-4">
                <ExpenseForm onAddExpense={handleAddExpense}/>
                <ExpenseList items={expenseList} onDeleteExpense={handleDeleteExpense}
                             onCategoryChange={handleCategoryChange}/>
            </div>
        </div>
    )
}

export default ExpenseApp