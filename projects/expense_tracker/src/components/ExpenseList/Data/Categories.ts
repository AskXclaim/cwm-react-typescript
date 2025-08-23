export const Categories = {
    AllCategories: "All Categories",
    Groceries: "Groceries",
    Utilities: "Utilities",
    Entertainment: "Entertainment",
}

export const getCategoriesAsObjectArray = () => {
    const objectArray: { value: string, text: string }[] = [];
    Object.entries(Categories).forEach(([key, value]) => {
        objectArray.push({value: key, text: value})
    });
    return objectArray;
}

 
 
