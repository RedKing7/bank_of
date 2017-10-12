import React, { Component } from 'react';
import Credit from './Credit'
import { Link } from 'react-router-dom'

class Credits extends Component {
   render() {

      const CreditComponents = this.props.credits.map((credit, index)=>{
         return (
            <div>
               <Credit credit={credit} key={index}/>
               <br/>
            </div>
         )
      })

      return (
         <div>
            <Link to="/">Home</Link>
            <h1>Credits</h1>
            {CreditComponents}
         </div>
      );
   }
}

export default Credits;