// Code DelayedButton Component Here
import React from 'react'

export default class DelayedButton extends React.Component {
  handleClick = event => {
    this.props.onDelayedClick
  }

  render () {
    return (
      <button onClick={this.handleClick}> </button>
    )
  }
}


// When the button is clicked, we want to persist the event so we can pass it to the this.props.onDelayedClick() in a setTimeout() block.
// The setTimeout() will be set to this.props.delay.
