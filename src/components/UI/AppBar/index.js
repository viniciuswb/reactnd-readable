import React from 'react'
import PropTypes from 'prop-types';
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

AppBar.propTypes = {
  title: PropTypes.string.isRequired
}

export default AppBar