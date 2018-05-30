import React, {Component} from 'react'
import CommentItem from "./CommentItem"
import { connect } from 'react-redux'
import * as actions from "../../actions"
import { RaisedButton, FlatButton } from 'material-ui'
import Modal from '../UI/Modal'
import moment from "moment/moment"

class CommentList extends Component {
  state = {
    open: false,
    updating: false,
    formId: '',
    formBody: '',
    formAuthor: ''
  }

  componentDidMount() {
    this.props.fetchComments(this.props.postId)
  }

  handleOpen = () => this.setState({ open: true })
  handleOpenUpdate = (cId, cBody) => this.setState({
    open: true,
    updating: true,
    formId: cId,
    formBody: cBody
  })
  handleClose = () => this.setState({ open: false, formTitle: '', formBody: '', formAuthor: '' })

  handleSubmit = () => {
    const id = moment().format('hmmssYY') + Math.random().toString(36).substr(2, 8) + moment().format('DDMM')
    const timestamp = new Date().getTime()
    const body = this.state.formBody
    const author = this.state.formAuthor
    const parentId = this.props.postId

    const comment = {
      id,
      timestamp,
      body,
      author,
      parentId
    }

    this.props.addComment(comment)
    this.handleClose()
  }

  handleUpdate = () => {
    const id = this.state.formId
    const timestamp = new Date().getTime()
    const body = this.state.formBody

    this.props.updateComment(id, { timestamp, body })
    this.handleClose()
  }

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
          .map((comment, index) => <CommentItem
            key={index}
            data={comment}
            deleteComment={this.props.deleteComment}
            vote={this.handleVoteComment}
            updateComment={this.handleOpenUpdate}
          />)}

        <Modal
          open={this.state.open}
          close={this.handleClose}
          title={null}
          body={this.state.formBody}
          author={this.state.updating ? null : this.state.formAuthor}
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