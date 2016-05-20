import React, { Component } from 'react'

import Button from './Button'

class SideBar extends Component {
  render () {
    return (
      <div className='col col-2 border complete-height purple-background'>
         <p className='bold center section-title'>
           Figures
         </p>
         <Button label='New Figure' />
         <p className='bold center section-title'>
           Images
         </p>
      </div>
    )
  }
}

export default SideBar
