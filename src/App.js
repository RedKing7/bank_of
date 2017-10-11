import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import AccountBalance from './components/AccountBalance';

class App extends Component {
  constructor(){
    super();

    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99'
      }
    }
  }

  render() {

    const HomeComponent = () =>{return <Home accountBalance={this.state.accountBalance}/>};
    const AccountBalanceWrapper = () =>{
      return <AccountBalance accountBalance={this.state.accountBalance}/>
    }
    const UserProfileComponent = () =>{
      return <UserProfile
        userName={this.state.currentUser.userName}
        memberSince={this.state.currentUser.memberSince}
      />
    }
    
    return (
        <Router>
          <Switch>
            <Route exact path="/" component={HomeComponent}/>
            <Route exact path="/account" component={AccountBalanceWrapper}/>
            <Route exact path="/userProfile" component={UserProfileComponent}/>
          </Switch>
        </Router>
    );
  }
}

export default App;