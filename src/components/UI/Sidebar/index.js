import React from 'react'
import {Menu, MenuItem} from 'material-ui'

import "./Sidebar.css"

const Sidebar = () => (
  <div className="Sidebar">
    <Menu>
      <div className="Sidebar-Itens">
        <MenuItem primaryText="Categoria 1"/>
        <MenuItem primaryText="Categoria 2"/>
        <MenuItem primaryText="Categoria 3"/>
        <MenuItem primaryText="Categoria 4"/>
      </div>
    </Menu>
  </div>
)

export default Sidebar