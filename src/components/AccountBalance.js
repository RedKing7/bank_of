import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

class AccountBalance extends Component {
  state = {
    redirectToHome: false
  }

  saveSomething = () => {
    console.log('Clicked')

    setTimeout(() => {
      this.setState({redirectToHome: true})
    }, 1500)
  }

  render () {
    if (this.state.redirectToHome) {
      return <Redirect to="/" />
    }

    this.props.getBalance();

    return (
      <div>
        <h1>Your balance is {this.props.accountBalance.toFixed(2)}</h1>
        <button onClick={this.saveSomething}>Redirect Button</button>
        <Link to="/">Home</Link>
      </div>
    )
  }
}

export default AccountBalance
