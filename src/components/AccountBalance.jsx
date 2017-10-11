import React, { Component } from 'react';

class AccountBalance extends Component {
  render() {
    return (
        <h1>
          Balance: {this.props.accountBalance}
        </h1>
    );
  }
}

export default AccountBalance;