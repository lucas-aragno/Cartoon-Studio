import React, { Component, PropTypes } from 'react'

class Figure extends Component {

  static propTypes = {
    type: PropTypes.string,
    callBack: PropTypes.func
  }

  render () {
    const { type } = this.props
    return (
      <div> </div>
    )
  }
}

export default Figure
