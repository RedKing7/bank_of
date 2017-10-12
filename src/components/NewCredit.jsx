import React, { Component } from 'react';

class NewCredit extends Component {
   constructor(){
      super();
      this.state = {
         credit:{
            amount: 0.00,
            description: '',
            date: Date.now()
         }
      }
   }

   addCredit = (e) =>{
      e.preventDefault();
      let newCredit = {...this.state.credit}
      this.props.addCredit(newCredit);
   }

   handleInputChange = (e) =>{
      let attr = e.target.name;
      let val = e.target.value;
      if(attr === 'number'){
         val = Number(val);
      }
      let newCredit = {...this.state.credit}
      newCredit[attr] = val;
      this.setState({credit: newCredit});
   }

   render() {
      return (
         <div>
            <form onSubmit={this.addCredit}>
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

               <input type="submit" value="Add Credit"/>
            </form>
         </div>
      );
   }
}

export default NewCredit;