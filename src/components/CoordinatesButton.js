// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {

  handleClick = function (event) {
    this.onReceiveCoordinates([event.pageX, event.pageY])
    var array = []
    array.push(event.pageX)
    array.push(event.pageY)
    return array
  }

  render () {
    return (
      <button onClick={this.handleClick}> </button>
    )
  }
}


export default CoordinatesButton
