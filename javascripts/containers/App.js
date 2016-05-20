import React, { Component } from 'react'

import SideBar from '../components/SideBar'
import AnimationArea from '../components/AnimationArea'

class App extends Component {
  render () {
    return (
      <div className='clearfix app-container'>
        <AnimationArea />
        <SideBar/>
      </div>
    )
  }
}

export default App
