import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Aux from './hoc/Aux'
import AppBar from './components/UI/AppBar'
import Sidebar from './components/UI/Sidebar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import PostList from "./components/PostList"
import * as actions from './actions'
import PostDetail from './components/PostDetail';

class App extends Component {
  componentDidMount() {
    this.props.fetchCategories()
  }

  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <Aux>
            <AppBar title="Readable" />
            {this.props.categories && <Sidebar categories={this.props.categories} />}
            <Route exact path='/' render={() => <PostList category="all" />} />
            {this.props.categories &&
              this.props.categories.map((category, index) =>
                <Route key={index} exact path={`/${category.path}`} render={() =>
                  <PostList category={category.name} />}
                />)
            }
            <Route exact path='/:category/:post_id' render={() => <PostDetail delete={this.props.deletePost} />} />
          </Aux>
        </BrowserRouter>
      </MuiThemeProvider>
    )
  }
}

function mapStateToProps({ categories, posts }) {
  return { categories, posts }
}

export default connect(mapStateToProps, actions)(App)