import React, { Component } from 'react';
import Debit from './Debit';
import { Link } from 'react-router-dom'
import AccountBalance from './AccountBalance'
import NewDebit from './NewDebit';

class Debits extends Component {
   render() {

      const DebitComponents = this.props.debits.map((debit, index)=>{
         return (
            <div key={index}>
               <Debit debit={debit} key={index}/>
               <br/>
            </div>
         )
      })

      return (
         <div>
            <Link to="/">Home</Link>
            <h1>Debits</h1>
            <NewDebit addDebit={this.props.addDebit}/>
            <hr/>
            {DebitComponents}
            <AccountBalance accountBalance={this.props.accountBalance}/>
         </div>
      );
   }
}

export default Debits;