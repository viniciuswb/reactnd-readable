import React, {Component} from 'react'

import Aux from './hoc/Aux'

import AppBar from './components/UI/AppBar'
import Sidebar from './components/UI/Sidebar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import PostList from "./components/PostList"
import {getAll} from "./utils/CategoriesAPI"

class App extends Component {
  state = {
    categories: null
  }

  componentDidMount() {
    getAll().then(categories => {
      this.setState({categories})
    })
  }

  render() {
    return (
      <MuiThemeProvider>
        <Aux>
          <AppBar title="Readable" />
          {this.state.categories && <Sidebar categories={this.state.categories} />}
          <PostList />
        </Aux>
      </MuiThemeProvider>
    )
  }
}

export default App
