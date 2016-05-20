import React, { Component, PropTypes } from 'react'

class SideBar extends Component {

  static propTypes = {
    label: PropTypes.string,
    callBack: PropTypes.func
  }

  render () {
    let { label, callBack } = this.props
    return (
      <a className='btn purple-btn'>
        {{ label }}
      </a>
    )
  }
}

export default SideBar
