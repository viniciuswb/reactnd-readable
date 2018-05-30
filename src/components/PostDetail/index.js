import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as actions from '../../actions'
import { FlatButton } from 'material-ui'
import Down from 'material-ui/svg-icons/action/thumb-down'
import Up from 'material-ui/svg-icons/action/thumb-up'
import Aux from '../../hoc/Aux'
import Modal from '../UI/Modal'
import CommentList from '../CommentList'

class PostDetail extends Component {
  state = {
    loading: true,
    open: false,
    formTitle: '',
    formBody: '',
    formId: ''
  }

  componentDidMount() {
    this.props.fetchPosts().then(() => this.setState({ loading: false }))
    this.props.fetchComments(this.props.match.params.post_id)
  }

  handleOpen = () => this.setState({ open: true })
  handleClose = () => this.setState({
    open: false,
    formTitle: '',
    formBody: '',
    formId: ''
  })

  vote = (id, vote) => this.props.votePost(id, vote)

  setTitle = (e) => this.setState({ formTitle: e.target.value })
  setBody = (e) => this.setState({ formBody: e.target.value })

  delete = (id) => {
    this.props.delete(id)
    this.props.history.push('/')
  }

  edit = (id, title, body) => {
    this.setState({
      formId: id,
      formTitle: title,
      formBody: body
    })
    this.handleOpen()
  }

  update = () => {
    const id = this.state.formId
    const title = this.state.formTitle
    const body = this.state.formBody

    this.props.updatePost(id, { title, body })
    this.handleClose()
  }

  render() {
    const post = this.props.posts.find(post => post.id === this.props.match.params.post_id)

    const actions = [
      <FlatButton
        label="Cancelar"
        secondary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label={'Salvar'}
        primary={true}
        keyboardFocused={true}
        onClick={this.update}
      />
    ]

    return (
      <div style={{ paddingLeft: 40 }}>
        <Modal
          open={this.state.open}
          close={this.handleClose}
          title={this.state.formTitle}
          body={this.state.formBody}
          author={null}
          category={null}
          setTitle={this.setTitle}
          setBody={this.setBody}
          setAuthor={null}
          setCategory={null}
          updating={true}
          categories={null}
          actions={actions}
        />
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
                <FlatButton label="Excluir" style={{float: 'right'}} onClick={() => this.delete(post.id)} />
                <FlatButton label="Editar" style={{float: 'right'}} onClick={() => this.edit(post.id, post.title, post.body)} />
              </div>
            </div>

            <CommentList comments={this.props.comments} />

          </Aux>
        }
      </div>
    )
  }
}

function mapStateToProps({ posts, comments }) {
  return { posts, comments }
}

export default withRouter(connect(mapStateToProps, actions)(PostDetail))