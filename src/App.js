import React, { Component } from 'react'
import { connect } from 'react-redux'
import Aux from './hoc/Aux'
import AppBar from './components/UI/AppBar'
import Sidebar from './components/UI/Sidebar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import PostList from "./components/PostList"
import { getPosts } from "./utils/ReadableAPI"
import * as actions from './actions'

class App extends Component {
  state = {
    posts: null
  }

  componentDidMount() {
    this.props.fetchCategories()
    getPosts().then(posts => {
      this.setState({ posts })
    })
  }

  render() {
    return (
      <MuiThemeProvider>
        <Aux>
          <AppBar title="Readable" />
          {this.props.categories && <Sidebar categories={this.props.categories} />}
          {this.state.posts && <PostList posts={this.state.posts} />}
        </Aux>
      </MuiThemeProvider>
    )
  }
}

function mapStateToProps({ categories }) {
  return { categories }
}

export default connect(mapStateToProps, actions)(App)
