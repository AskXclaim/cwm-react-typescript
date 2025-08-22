import './App.css'
import {ExpenseForm} from "./components/ExpenseForm";
import {Header} from "./components";


function App() {
    return (
        <div className="container">
            <Header text={"Expense Tracker"}/>
            <div className="m-4">
                <ExpenseForm/>
            </div>
        </div>
    )
}

export default App
