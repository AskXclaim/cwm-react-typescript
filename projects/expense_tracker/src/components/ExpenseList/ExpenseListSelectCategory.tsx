import type {ExpenseListCategoryProps} from "./";

const ExpenseListSelectCategory = ({id, options}: ExpenseListCategoryProps) => {
    return (
        <div className="d-flex justify-content-start mb-2 w-75">
            <select className="form-select" id={id}>
                {
                    options.map(option => {
                        return (<option key={option.value} value={option.value}>{option.text}</option>);
                    })
                }
            </select>
        </div>
    );
}
export default ExpenseListSelectCategory;