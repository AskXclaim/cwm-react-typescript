import type {ExpenseItemProps} from "./";

const capitalizeFirstLetter = (value: string) =>
    value.charAt(0).toUpperCase() + value.slice(1);

const ExpenseItem =
    ({description, amount, category, currencySymbol}: ExpenseItemProps) => {
        return (
            <tr>
                <td>{capitalizeFirstLetter(description)}</td>
                <td>{currencySymbol}{amount.toFixed(2)}</td>
                <td>{capitalizeFirstLetter(category)}</td>
                <td>
                    <button className="btn btn-outline-danger">Delete</button>
                </td>
            </tr>
        );
    }
export default ExpenseItem;