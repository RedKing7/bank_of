import React from 'react';

const Credit = (props) =>{
   const {credit} = props;

   return(
      <div>
         <span>Description: {credit.description}</span>
         <br/>
         <span>Amount: {credit.amount}</span>
         <br/>
         <span>Date: {credit.date}</span>
      </div>
   )
}

export default Credit