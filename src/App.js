import React, {Component} from 'react'

import Aux from './hoc/Aux'

import AppBar from './components/UI/AppBar'
import Sidebar from './components/UI/Sidebar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import PostList from "./components/PostList"
import {getCategories, getPosts} from "./utils/ReadableAPI"

class App extends Component {
  state = {
    categories: null,
    posts: null
  }

  componentDidMount() {
    getCategories().then(categories => {
      this.setState({categories})
    })
    getPosts().then(posts => {
      this.setState({posts})
    })
  }

  render() {
    return (
      <MuiThemeProvider>
        <Aux>
          <AppBar title="Readable" />
          {this.state.categories && <Sidebar categories={this.state.categories} />}
          {this.state.posts && <PostList posts={this.state.posts} />}
        </Aux>
      </MuiThemeProvider>
    )
  }
}

export default App
