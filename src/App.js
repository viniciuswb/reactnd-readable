import React, {Component} from 'react'

import Aux from './hoc/Aux'

import AppBar from './components/UI/AppBar'
import Sidebar from './components/UI/Sidebar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import PostList from "./components/PostList"

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Aux>
          <AppBar title="Readable" />
          <Sidebar />
          <PostList />
        </Aux>
      </MuiThemeProvider>
    )
  }
}

export default App
