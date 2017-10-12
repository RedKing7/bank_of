import React, { Component } from 'react';
import Debit from './Debit';
import { Link } from 'react-router-dom'

class Debits extends Component {
   render() {

      const DebitComponents = this.props.debits.map((debit, index)=>{
         return (
            <div>
               <Debit debit={debit} key={index}/>
               <br/>
            </div>
         )
      })

      return (
         <div>
            <Link to="/">Home</Link>
            <h1>Debits</h1>
            {DebitComponents}
         </div>
      );
   }
}

export default Debits;