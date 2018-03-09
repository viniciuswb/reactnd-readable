import React from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import {Menu, MenuItem} from 'material-ui'

const Sidebar = ({categories, history}) => (
  <div className="sidebar">
    <Menu>
      <div className="sidebar-items">
        {categories && categories.map((categorie) => 
          <MenuItem key={categorie.path} primaryText={categorie.name} onClick={() => history.push('/' + categorie.path)} />)}
      </div>
    </Menu>
  </div>
)

Sidebar.propTypes = {
  categories: PropTypes.array.isRequired
}

export default withRouter(Sidebar)