import React from 'react'
import Bar from 'material-ui/AppBar'

import './AppBar.css'

const AppBar = () => {
  const appName = 'MyReads'

  return (
    <Bar
      title={appName}
      className="AppBar"
      showMenuIconButton={false}
    />
  )
}

export default AppBar