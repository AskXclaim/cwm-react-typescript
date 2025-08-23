export const Categories = {
    Groceries: 'Groceries',
    Utilities: 'Utilities',
    Entertainment: 'Entertainment',
}

export const getCategoriesAsObjectArray = () => {
    const categories: { value: string, text: string }[] = [];
    Object.entries(Categories).forEach(([key, value]) => {
        categories.push({value: key, text: value});
    })
    return categories;
}
