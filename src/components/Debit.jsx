import React from 'react';

const Debit = (props) =>{
   const {debit} = props;

   return(
      <div>
         <span>Description: {debit.description}</span>
         <br/>
         <span>Amount: {debit.amount}</span>
         <br/>
         <span>Date: {debit.date}</span>
      </div>
   )
}

export default Debit