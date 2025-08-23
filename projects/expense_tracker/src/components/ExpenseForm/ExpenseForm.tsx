import "./ExpenseForm.css"
import {
    ExpenseFormSchema,
    ExpenseFormInputGroup,
    ExpenseFormSelectGroup,
    getCategoriesAsObjectArray
} from "./";
import {useForm, type SubmitHandler, type FieldValues} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

type ExpenseFormData = z.infer<typeof ExpenseFormSchema>;
const getSelectData = () =>
    [{value: "", text: "Please choose a category"}, ...getCategoriesAsObjectArray()]


const ExpenseForm = () => {
    const handleReactFormFormSubmit: SubmitHandler<ExpenseFormData> = (data: FieldValues) => {
        console.log(data);
    }
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<ExpenseFormData>({resolver: zodResolver(ExpenseFormSchema)});
    return (
        <form onSubmit={handleSubmit(handleReactFormFormSubmit)}>
            <div className="min-width-400px d-flex flex-column align-items-start m-1">
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