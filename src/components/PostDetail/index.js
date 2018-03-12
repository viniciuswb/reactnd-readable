import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as actions from '../../actions'
import { FlatButton } from 'material-ui'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import Down from 'material-ui/svg-icons/action/thumb-down'
import Up from 'material-ui/svg-icons/action/thumb-up'
import Aux from '../../hoc/Aux'

class PostDetail extends Component {
  state = {
    loading: true
  }

  componentDidMount() {
    this.props.fetchPosts().then(() => this.setState({ loading: false }))
  }

  vote = (id, vote) => this.props.votePost(id, vote)

  delete = (id) => {
    this.props.delete(id)
    this.props.history.push('/')
  }

  render() {
    const post = this.props.posts.find(post => post.id === this.props.match.params.post_id)

    return (
      <div style={{ paddingLeft: 40 }}>
        {!this.state.loading &&
          <Aux>
            <div className="postdetail">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <ul>
                <li>Autor: {post.author}</li>
                <li>Comentários: {post.commentCount}</li>
                <li>Score: {post.voteScore}</li>
              </ul>
              <FlatButton icon={<Up color="green" />} style={{float: 'left'}} onClick={() => this.vote(post.id, 'upVote')} />
              <FlatButton icon={<Down color="red" />} style={{float: 'left'}} onClick={() => this.vote(post.id, 'downVote')} />
              <div>
                <FlatButton label="Editar" style={{float: 'right'}} onClick={() => alert('Editar')} />
                <FlatButton label="Excluir" style={{float: 'right'}} onClick={() => this.delete(post.id)} />
              </div>
            </div>
            <div style={{ width: '75%', float: 'right', paddingBottom: 40, paddingRight: '5%' }}>
              <h2>Comentários</h2>
              <Card style={{marginBottom: 40}}>
                <CardHeader
                  title="Autor do Comentário"
                />
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                  <FlatButton label="Action1" />
                  <FlatButton label="Action2" />
                </CardActions>
              </Card>

              <Card style={{marginBottom: 40}}>
                <CardHeader
                  title="Autor do Comentário"
                />
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                  <FlatButton label="Action1" />
                  <FlatButton label="Action2" />
                </CardActions>
              </Card>
            </div>
          </Aux>
        }
      </div>
    )
  }
}

function mapStateToProps({ posts }) {
  return { posts }
}

export default withRouter(connect(mapStateToProps, actions)(PostDetail))