// Code DelayedButton Component Here
import React from 'react'

export default class DelayedButton extends React.Component {
  onDelayedClick = function (event) {
    var array = []
    array.push(event.pageX)
    array.push(event.pageY)
    return array
  }

  delay = {this.props.delay}

  render () {
    return (
      <button onClick={this.onDelayedClick}> </button>
    )
  }
}


// When the button is clicked, we want to persist the event so we can pass it to the this.props.onDelayedClick() in a setTimeout() block.
// The setTimeout() will be set to this.props.delay.
