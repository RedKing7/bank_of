import React, { Component } from 'react'

class AccountBalance extends Component {
  render () {
    return (
      <div>
        <h1>Your balance is {this.props.accountBalance.toFixed(2)}</h1>
      </div>
    )
  }
}

export default AccountBalance
