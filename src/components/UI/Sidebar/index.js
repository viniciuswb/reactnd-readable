import React from 'react'
import {Menu, MenuItem} from 'material-ui'

import "./Sidebar.css"

const Sidebar = ({categories}) => (
  <div className="Sidebar">
    <Menu>
      <div className="Sidebar-Itens">
        {categories.map((categorie) => <MenuItem key={categorie.path} primaryText={categorie.name} />)}
      </div>
    </Menu>
  </div>
)

export default Sidebar