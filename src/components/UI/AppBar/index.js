import React from 'react'
import Bar from 'material-ui/AppBar'

const AppBar = ({title}) => {
  return (
    <Bar
      title={title}
      className="appbar"
      showMenuIconButton={false}
    />
  )
}

export default AppBar