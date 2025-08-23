import './App.css'
import {ExpenseForm} from "./components/ExpenseForm";
import {Header} from "./components";
import {ExpenseList} from "./components/ExpenseList";


function App() {
    return (
        <div className="container">
            <Header text={"Expense Tracker"}/>
            <div className="m-4">
                <ExpenseForm/>
                <ExpenseList/>
            </div>
        </div>
    )
}

export default App
