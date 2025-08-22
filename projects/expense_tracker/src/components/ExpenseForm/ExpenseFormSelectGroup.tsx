import type {ExpenseFormSelectGroupProps} from "./Props/ExpenseFormSelectGroupProps.ts";

const ExpenseFormSelectGroup = 
    ({labelDescription, selectId,options,register,errors}:ExpenseFormSelectGroupProps) => {
    return (
        <div className="d-flex flex-column align-items-start w-100 mt-2 mb-2">
            <label htmlFor={selectId} className="m-1 ps-1">{labelDescription}</label>

            <select className="form-select" id={selectId} {...register(selectId)}>
                {options.map((option) => {
                    return (<option key={option.value} value={option.value}>{option.text}</option> )
                })}
            </select>
            {errors[selectId] && (<span className="text-danger text-start ps-1">{errors[selectId].message}</span>)}
        </div>
    );
}
export default ExpenseFormSelectGroup;