import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import Debits from './components/Debits';
import Credits from './components/Credits';

import axios from 'axios';


class App extends Component {
  state = {
    user: {
      userName: 'Bob',
      memberSince: 1950
    },
    accountBalance: 0,
    debits: [],
    credits: []
  }

  getDebits = () =>{
    axios.get("http://localhost:4000/debits")
      .then((response)=>{
        const debits = response.data;
        this.setState({debits});
      })
  }
  
  getCredits = () =>{
    axios.get("http://localhost:4000/credits")
    .then((response)=>{
      const credits = response.data;
      this.setState({credits});
    })
  }

  getBalance = () =>{
    let debitTotal = this.state.debits.reduce((total, debit)=>{
      return total+debit.amount;
    }, 0)
    let creditTotal = this.state.credits.reduce((total, credit)=>{
      return total+credit.amount;
    },0)
    return creditTotal-debitTotal;
  }
  
  componentWillMount(){
    this.getDebits();
    this.getCredits();
    console.log('third')
  }
  
  render () {
    console.log('last')
    const accountBalance = this.getBalance();

    const HomeComponent = () =>{
      return <Home accountBalance={accountBalance}/>
    }

    const UserProfileWrapper = () => {
      return <UserProfile
        userName={this.state.user.userName}
        memberSince={this.state.user.memberSince}
      />
    }

    const DebitsWrapper = () =>{
      return <Debits debits={this.state.debits} accountBalance={accountBalance}/>
    }

    const CreditsWrapper = () =>{
      return <Credits credits={this.state.credits} accountBalance={accountBalance}/>
    }

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route exact path="/debits" render={DebitsWrapper}/>
          <Route exact path="/credits" render={CreditsWrapper}/>
          <Route exact path="/user" render={UserProfileWrapper} />
        </Switch>
      </Router>
    )
  }
}

export default App
