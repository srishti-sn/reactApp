import React,{useState} from  "react";
import './ExpenseForm.css'

const ExpenseForm=(props)=>{

    const [enteredTitle,setTitle]=useState('');
    const [enteredAmount,setAmount]=useState('');
    const [enteredDate,setDate]=useState('');
    const titleChangeHandler=(event)=>{
        setTitle(event.target.value);
    }

    const amountChangeHandler=(event)=>{
        setAmount(event.target.value);
    }

    const dateChangeHandler=(event)=>{
        setDate(event.target.value);
    }
    const formSubmitHandler=(event)=>{
        event.preventDefault();

        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate),
        }
        props.onSaveExpenseData(expenseData);
        setTitle('');
        setAmount('');
        setDate('');
    }
    const cancelForm=()=>{
        props.cancelFormState();
    }
    return(
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} onChange={amountChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div>
                <button type="submit">Add Expense</button>
                <button onClick={props.cancelFormState}>Cancel</button>
            </div>
        </form>
    )
}
export default ExpenseForm;