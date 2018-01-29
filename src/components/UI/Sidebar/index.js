import React from 'react'
import {Menu, MenuItem} from 'material-ui'

const Sidebar = ({categories}) => (
  <div className="sidebar">
    <Menu>
      <div className="sidebar-items">
        {categories.map((categorie) => <MenuItem key={categorie.path} primaryText={categorie.name} />)}
      </div>
    </Menu>
  </div>
)

export default Sidebar