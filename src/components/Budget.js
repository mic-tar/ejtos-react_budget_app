import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch } = useContext(AppContext);

    const handleBudgetChange = (event) => {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);

        if(event.target.value < totalExpenses) {
            alert("You cannot reduce the budget below the total expenses £"+totalExpenses);
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        });
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £ </span>
            <input type="number" step="10" value={budget} onChange={handleBudgetChange}/>
        </div>
    );
};
export default Budget;
