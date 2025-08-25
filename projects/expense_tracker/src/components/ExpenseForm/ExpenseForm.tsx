import {
    ExpenseFormSchema,
    ExpenseFormInputGroup,
    ExpenseFormSelectGroup,
    getCategoriesAsObjectArray, type ExpenseFormDataType, type ExpenseFormProps
} from "./";
import {useForm, type SubmitHandler} from "react-hook-form";

import {zodResolver} from "@hookform/resolvers/zod";

const getSelectData = () =>
    [{value: "", text: "Please choose a category"}, ...getCategoriesAsObjectArray()]

const ExpenseForm = ({onAddExpense}:ExpenseFormProps) => {
    const handleAddExpense: SubmitHandler<ExpenseFormDataType> = (data: ExpenseFormDataType) => {
       onAddExpense(data);
    }
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<ExpenseFormDataType>({resolver: zodResolver(ExpenseFormSchema)});
    return (
        <form onSubmit={handleSubmit(handleAddExpense)}>
            <div className="d-flex flex-column align-items-start m-1">
                <ExpenseFormInputGroup labelDescription="Description" inputId="description"
                                       placeholder="Description..." inputType="text" register={register}
                                       errors={errors}/>
                <ExpenseFormInputGroup labelDescription="Amount" inputId="amount"
                                       placeholder="amount..." inputType="number" register={register}
                                       errors={errors}/>
                <ExpenseFormSelectGroup labelDescription="Category" selectId="category" options={getSelectData()}
                                        register={register} errors={errors}/>

                <button className="btn btn-lg btn-outline-primary  m-1 mt-3">Add</button>
            </div>
        </form>
    );
}
export default ExpenseForm;