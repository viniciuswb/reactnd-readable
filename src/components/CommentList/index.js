import React, {Component} from 'react'
import CommentItem from "./CommentItem"
import { connect } from 'react-redux'
import * as actions from "../../actions"
import { RaisedButton, FlatButton } from 'material-ui'
import Modal from '../UI/Modal'

class CommentList extends Component {
  state = {
    open: false,
    updating: false,
    formTitle: '',
    formBody: '',
    formAuthor: ''
  }

  componentDidMount() {
    this.props.fetchComments(this.props.postId)
  }

  handleOpen = () => this.setState({ open: true })
  handleClose = () => this.setState({ open: false })

  handleSubmit = () => alert('submit')
  handleUpdate = () => alert('update')

  setTitle = (e) => this.setState({ formTitle: e.target.value })
  setBody = (e) => this.setState({ formBody: e.target.value })
  setAuthor = (e) => this.setState({ formAuthor: e.target.value })

  handleVoteComment = (id, vote) => this.props.voteComment(id, vote)

  render() {
    const actions = [
      <FlatButton
        label="Cancelar"
        secondary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label={this.state.updating ? 'Salvar' : 'Criar'}
        primary={true}
        keyboardFocused={true}
        onClick={this.state.updating ? this.handleUpdate : this.handleSubmit}
      />
    ]

    return (
      <div className="comment-list">
        <RaisedButton
          onClick={this.handleOpen}
          label="Criar Comentário"
          className="add-comment" />

        <h2>Comentários</h2>

        {this.props.comments
          .filter(comment => comment.deleted !== true)
          .map((comment, index) => <CommentItem key={index} data={comment} vote={this.handleVoteComment} />)}

        <Modal
          open={this.state.open}
          close={this.handleClose}
          title={this.state.formTitle}
          body={this.state.formBody}
          author={this.state.formAuthor}
          category={null}
          setTitle={this.setTitle}
          setBody={this.setBody}
          setAuthor={this.setAuthor}
          setCategory={null}
          updating={this.state.updating}
          categories={null}
          actions={actions}
          modalTitle={this.state.updating ? 'Editar comentário' : 'Criar novo comentário'}
        />
      </div>
    )
  }
}

function mapStateToProps({ comments }) {
  return { comments }
}

export default connect(mapStateToProps, actions)(CommentList)