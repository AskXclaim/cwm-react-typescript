import {z} from 'zod';
import {CategoryEnum} from './';


const ExpenseFormSchema = z.object({
    description: z.string().min(5,
        {message: "Description must be at least 5 characters"})
        .max(50, {message: "Description cannot be more than 50 characters"}),
    amount: z.number({message:"Amount is required"}).min(0.1, {message: "Amount cannot be less than 0.1"})
        .max(10_000, {message: "Amount cannot be more than 10,000"}),
    category: z.enum(CategoryEnum,{message:"Please select a category"}),
});
export default ExpenseFormSchema;