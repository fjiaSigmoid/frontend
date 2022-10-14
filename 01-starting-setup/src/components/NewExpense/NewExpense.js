import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import React, { useState } from 'react';

const NewExpense = (props) => {
    const SaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        console.log('NewExpense:', expenseData);
        props.onAddExpense(expenseData);
    };

    const [isEditing, setIsEditing] = useState(false);

    const isEditingHandler = () => {
        setIsEditing(true);
    };

    const cancelEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className='new-expense'>
            {!isEditing && (
                <button onClick={isEditingHandler}>Add New Expense</button>
            )}
            {isEditing && (
                <ExpenseForm
                    onCancelClick={cancelEditingHandler}
                    onSaveExpenseData={SaveExpenseDataHandler}
                />
            )}
        </div>
    );
};
export default NewExpense;
