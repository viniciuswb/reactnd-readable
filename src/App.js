import React, { Component } from 'react'
import { connect } from 'react-redux'
import Aux from './hoc/Aux'
import AppBar from './components/UI/AppBar'
import Sidebar from './components/UI/Sidebar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import PostList from "./components/PostList"
import * as actions from './actions'

class App extends Component {
  componentDidMount() {
    this.props.fetchCategories()
    this.props.fetchPosts()
  }

  render() {
    return (
      <MuiThemeProvider>
        <Aux>
          <AppBar title="Readable" />
          {this.props.categories && <Sidebar categories={this.props.categories} />}
          {this.props.posts && <PostList posts={this.props.posts} />}
        </Aux>
      </MuiThemeProvider>
    )
  }
}

function mapStateToProps({ categories, posts }) {
  return { categories, posts }
}

export default connect(mapStateToProps, actions)(App)