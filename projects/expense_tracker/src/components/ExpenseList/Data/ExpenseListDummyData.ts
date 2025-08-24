import ShortUniqueId from "short-unique-id";

const getExpenseListDummyData = () => {
    const uid = new ShortUniqueId({length: 10});

    return [{key: uid.rnd(), description: "Description1", currencySymbol: "£", amount: 1, category: "Groceries"},
        {key: uid.rnd(), description: "Description2", currencySymbol: "£", amount: 2, category: "Utilities"},
        {key: uid.rnd(), description: "Description3", currencySymbol: "£", amount: 3, category: "Entertainment"},];
}
export const expenseListDummyData = getExpenseListDummyData();