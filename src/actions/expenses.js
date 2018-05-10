import uuid from 'uuid';

//ADD_EXPENSE
export const addExpense = ( //this is addExpense Generator
    { 
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0 
    } = {} 
) => ({
type: 'ADD_EXPENSE',
expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
}
})

//REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({ //this is removeExpense Generator
type: 'REMOVE_EXPENSE',
id
});

//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
type: 'EDIT_EXPENSE',
id,
updates
});