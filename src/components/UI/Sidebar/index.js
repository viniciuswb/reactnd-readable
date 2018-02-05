import React from 'react'
import PropTypes from 'prop-types';
import {Menu, MenuItem} from 'material-ui'

const Sidebar = ({categories}) => (
  <div className="sidebar">
    <Menu>
      <div className="sidebar-items">
        {categories && categories.map((categorie) => <MenuItem key={categorie.path} primaryText={categorie.name} />)}
      </div>
    </Menu>
  </div>
)

Sidebar.propTypes = {
  categories: PropTypes.array.isRequired
}

export default Sidebar