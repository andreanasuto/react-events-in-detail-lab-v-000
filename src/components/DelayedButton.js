import React from 'react';

class DelayedButton extends React.Component {
  handleClick = (event) => {
    event.persist();
    function setTimeout(function () {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  }

  render() {
    return (
      <button onClick={this.handleClick}>Delayed</button>
    );
  }
}

export default DelayedButton
