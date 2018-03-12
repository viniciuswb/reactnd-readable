import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as actions from '../../actions'
import { FlatButton } from 'material-ui'
import Down from 'material-ui/svg-icons/action/thumb-down'
import Up from 'material-ui/svg-icons/action/thumb-up'

class PostDetail extends Component {
  state = {
    loading: true
  }

  componentDidMount() {
    this.props.fetchPosts().then(() => this.setState({ loading: false }))
  }

  vote = (id, vote) => this.props.votePost(id, vote)

  render() {
    const post = this.props.posts.find(post => post.id === this.props.match.params.post_id)

    return (
      <div style={{ paddingLeft: 40 }}>
        {!this.state.loading &&
          <div className="postdetail">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <ul>
              <li>Autor: {post.author}</li>
              <li>Comentários: {post.commentCount}</li>
              <li>Score: {post.voteScore}</li>
            </ul>
            <FlatButton icon={<Up color="green" />} onClick={() => this.vote(post.id, 'upVote')} />
            <FlatButton icon={<Down color="red" />} onClick={() => this.vote(post.id, 'downVote')} />
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