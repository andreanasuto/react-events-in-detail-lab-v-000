// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {

  onReceiveCoordinates = function (event) {
    var array = []
    array.push(event.pageX)
    array.push(event.pageY)
    return array
  }

  render () {
    return (
      <button onClick={this.onReceiveCoordinates}> </button>
    )
  }
}


export default CoordinatesButton
