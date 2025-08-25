import type {ExpenseListCategoryProps} from "./";

const ExpenseListSelectCategory = ({id, options, onSelection}: ExpenseListCategoryProps) => {
    return (
        <div className="d-flex justify-content-start mb-2 w-100">
            <select className="form-select" id={id} onChange={e => onSelection(e.target.value)}>
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