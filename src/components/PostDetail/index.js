import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as actions from '../../actions'

class PostDetail extends Component {
  state = {
    loading: true
  }

  componentDidMount() {
    this.props.fetchPosts().then(() => this.setState({ loading: false }))
  }

  render() {
    const post = this.props.posts.find(post => post.id === this.props.match.params.post_id)
    
    return (
      <div>
        {!this.state.loading &&
          <div className="postdetail">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <ul>
              <li>Autor: {post.author}</li>
              <li>Comentários: {post.commentCount}</li>
              <li>Score: {post.voteScore}</li>
            </ul>
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps({ posts }) {
  return { posts }
}

export default withRouter(connect(mapStateToProps, actions)(PostDetail))