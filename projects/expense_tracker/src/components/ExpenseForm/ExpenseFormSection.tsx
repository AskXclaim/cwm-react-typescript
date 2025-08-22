import {type ExpenseFormSectionProps} from "./index.ts"
import type {JSX} from "react";

const ExpenseFormSection =
    ({labelDescription, inputId, placeholder, inputType, register, errors}: ExpenseFormSectionProps) => {

        let Input:JSX.Element;

        if (inputType === "text") {
            Input = <input id={inputId} type={inputType} className="form-control m-1 ps-1"
                           placeholder={placeholder} {...register(inputId)}/>
        } else {
            Input = <input id={inputId} type={inputType} className="form-control m-1 ps-1"
                           placeholder={placeholder} {...register(inputId, {valueAsNumber: true})}/>
        }

        return (
            <div className="d-flex flex-column align-items-start w-100">
                <label htmlFor={inputId} className="m-1 ps-1">{labelDescription}</label>
                {Input}
                {errors[inputId] && (<span className="text-danger text-start ps-1">{errors[inputId].message}</span>)}
            </div>
        );
    }
export default ExpenseFormSection;