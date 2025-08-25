type ExpenseTotalProps = {
    description: string;
    currencySymbol: string;
    amount: string;
}
const ExpenseTotal = ({description, currencySymbol, amount}: ExpenseTotalProps) => {
    return (
        <tr className="col">
            <td>{description}</td>
            <td>{currencySymbol}{amount}</td>
            <td></td>
            <td></td>
        </tr>
    );
}

export default ExpenseTotal;