import React,{useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {

    const saveExpenseData=(expenseData)=>{
        props.addNewExpense(expenseData);
    }
const [isEditing,setEditingState]=useState(false);
const cancelFormState=()=>{
  setEditingState(false);
}
const addExpenseClickHandler=()=>{
  setEditingState(true);
}
  return (
    <div className="new-expense">
     {!isEditing?<button onClick={addExpenseClickHandler}>Add Expense</button>:
     <ExpenseForm onSaveExpenseData={saveExpenseData} cancelFormState={cancelFormState}></ExpenseForm>}
    </div>
  );
};
export default NewExpense;
