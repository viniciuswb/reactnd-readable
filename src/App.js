import React, {Component} from 'react'

import AppBar from './components/UI/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <AppBar title="Readable" />
      </MuiThemeProvider>
    )
  }
}

export default App
