import React, {Component} from 'react'

import Aux from './hoc/Aux'

import AppBar from './components/UI/AppBar'
import Sidebar from './components/UI/Sidebar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Post from "./components/Post"

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Aux>
          <AppBar title="Readable" />
          <Sidebar />
          <Post />
        </Aux>
      </MuiThemeProvider>
    )
  }
}

export default App
