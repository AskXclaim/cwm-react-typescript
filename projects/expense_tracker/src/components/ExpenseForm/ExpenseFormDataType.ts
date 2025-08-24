import {z} from "zod";
export type ExpenseFormDataType = z.infer<typeof ExpenseFormSchema>;