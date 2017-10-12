import React, { Component } from 'react';

class NewDebit extends Component {
   constructor(){
      super();
      this.state = {
         debit:{
            amount: 0.00,
            description: '',
            date: Date.now()
         }
      }
   }

   addDebit = (e) =>{
      e.preventDefault();
      let newDebit = {...this.state.debit}
      this.props.addDebit(newDebit);
   }

   handleInputChange = (e) =>{
      let attr = e.target.name;
      let val = e.target.value;
      if(attr === 'number'){
         val = Number(val);
      }
      let newDebit = {...this.state.debit}
      newDebit[attr] = val;
      this.setState({debit: newDebit});
   }

   render() {
      return (
         <div>
            <form onSubmit={this.addDebit}>
               <input type="text"
                      name="description"
                      onChange={this.handleInputChange}
                      placeholder="Description"
                      required
               />

               <input type="number"
                      name="amount"
                      onChange={this.handleInputChange}
                      placeholder="Amount"
                      step=".01"
                      min="00"
                      required
               />

               <input type="submit" value="Add Debit"/>
            </form>
         </div>
      );
   }
}

export default NewDebit;