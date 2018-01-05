import React from 'react'
import Bar from 'material-ui/AppBar'

import './AppBar.css'

const AppBar = ({title}) => {
  return (
    <Bar
      title={title}
      className="AppBar"
      showMenuIconButton={false}
    />
  )
}

export default AppBar