import React from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import Bar from 'material-ui/AppBar'

const AppBar = ({title, history}) => {
  return (
    <Bar
      title={title}
      className="appbar"
      showMenuIconButton={false}
      onTitleClick={() => history.push('/')}
      style={{cursor: 'pointer'}}
    />
  )
}

AppBar.propTypes = {
  title: PropTypes.string.isRequired
}

export default withRouter(AppBar)