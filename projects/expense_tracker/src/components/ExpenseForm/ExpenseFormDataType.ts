import {z} from "zod";
import type {ExpenseFormSchema} from "./";
export type ExpenseFormDataType = z.infer<typeof ExpenseFormSchema>;