import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import AccountBalance from './components/AccountBalance';
import Debits from './components/Debits';
import Credits from './components/Credits';

import axios from 'axios';

class App extends Component {
  state = {
    user: {
      userName: 'Bob',
      memberSince: 1950
    },
    accountBalance: 12345.34 //credits - debits
  }

  
  render () {
    const getBalance = async () =>{
      let debits = await axios.get("http://localhost:4000/debits")
      let credits = await axios.get('http://localhost:4000/credits');
      if(debits.status === 200 && credits.status === 200){
        let debitTotal = debits.data.map((data)=>{return data.amount}).reduce((sum, val)=>{return sum+val});
        let creditTotal = credits.data.map((data)=>{return data.amount}).reduce((sum, val)=>{return sum+val});
        this.setState({accountBalance: creditTotal-debitTotal});
      }else{
        console.log('Error!');
      }
    }

    const AccountBalanceWrapper = () => {
      return (<AccountBalance
        accountBalance={this.state.accountBalance}
        getBalance={getBalance}
      />)
    }
    
    const UserProfileWrapper = () => {
      return (<UserProfile
        userName={this.state.user.userName}
        memberSince={this.state.user.memberSince}
      />)
    }

    const DebitsWrapper = () =>{
      return(<Debits/>)
    }

    const CreditsWrapper = () =>{
      return(<Credits/>)
    }

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/account" render={AccountBalanceWrapper}/>
          <Route exact path="/debits" render={DebitsWrapper}/>
          {<Route exact path="/credits" render={CreditsWrapper}/>}
          <Route exact path="/user" render={UserProfileWrapper} />
        </Switch>
      </Router>
    )
  }
}

export default App
