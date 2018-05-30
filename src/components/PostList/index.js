import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import * as actions from '../../actions'
import PostItem from './PostItem'
import { RaisedButton, FlatButton, DropDownMenu, MenuItem } from 'material-ui'
import _ from 'lodash'
import Modal from '../UI/Modal'

class Post extends Component {
  state = {
    open: false,
    post_id: '',
    formTitle: '',
    formBody: '',
    formAuthor: '',
    formId: '',
    formCategory: '',
    updating: false,
    sort: 'timestamp'
  }

  componentDidMount() {
    if (this.props.category === 'all') {
      this.props.fetchPosts()
    } else {
      this.props.fetchPostsByCategory(this.props.category)
    }
  }

  handleOpen = () => this.setState({ open: true })
  handleClose = () => this.setState({
    open: false,
    formTitle: '',
    formBody: '',
    formAuthor: '',
    formId: '',
    formCategory: null,
    updating: false
  })

  handleEdit = (formTitle, formBody, formAuthor, formCategory, formId) => {
    this.setState({
      formTitle,
      formBody,
      formAuthor,
      formCategory,
      formId,
      updating: true
    })

    this.handleOpen()
  }

  handleSubmit = () => {
    const id = moment().format('hmmssYY') + Math.random().toString(36).substr(2, 8) + moment().format('DDMM')
    const timestamp = new Date().getTime()
    const title = this.state.formTitle
    const body = this.state.formBody
    const author = this.state.formAuthor
    const category = this.state.formCategory

    const post = {
      id,
      timestamp,
      title,
      category,
      author,
      body
    }

    this.props.addPost(post)
    this.handleClose()
  }

  handleUpdate = () => {
    const id = this.state.formId
    const title = this.state.formTitle
    const body = this.state.formBody

    this.props.updatePost(id, { title, body })
    this.handleClose()
  }

  handleVotePost = (id, vote) => this.props.votePost(id, vote)

  handleSort = (event, index, value) => {
    event.preventDefault()
    this.setState({
      sort: value
    })
  }

  setTitle = (e) => this.setState({ formTitle: e.target.value })
  setBody = (e) => this.setState({ formBody: e.target.value })
  setAuthor = (e) => this.setState({ formAuthor: e.target.value })
  setCategory = (e, i, value) => this.setState({ formCategory: value })

  render() {
    const posts = _.sortBy(this.props.posts, this.state.sort).reverse()
    
    const actions = [
      <FlatButton
        label="Cancelar"
        secondary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label={this.state.updating ? 'Salvar' : 'Enviar'}
        primary={true}
        keyboardFocused={true}
        onClick={this.state.updating ? this.handleUpdate : this.handleSubmit}
      />
    ]

    return (
      <div className="postlist">
        <RaisedButton
          onClick={this.handleOpen}
          label="Criar Post"
          className="add-post" />

        <DropDownMenu value={this.state.sort} onChange={this.handleSort} className="order-posts">
          <MenuItem value={'timestamp'} primaryText="Ordenar por Data" />
          <MenuItem value={'voteScore'} primaryText="Ordenar por Score" />
        </DropDownMenu>

        <Modal 
          open={this.state.open} 
          close={this.handleClose} 
          title={this.state.formTitle}
          body={this.state.formBody} 
          author={this.state.formAuthor} 
          category={this.state.formCategory} 
          setTitle={this.setTitle}
          setBody={this.setBody}
          setAuthor={this.setAuthor}
          setCategory={this.setCategory}
          updating={this.state.updating}
          categories={this.props.categories}
          update={this.handleUpdate}
          submit={this.handleSubmit}
          actions={actions}
        />

        {posts && posts.map(post => <PostItem
          key={post.id}
          id={post.id}
          title={post.title}
          author={post.author}
          comments={post.commentCount}
          category={post.category}
          score={post.voteScore}
          body={post.body}
          remove={this.props.deletePost}
          edit={this.handleEdit}
          view={this.handleView}
          vote={this.handleVotePost}
        />)}
      </div>
    )
  }
}

function mapStateToProps({ categories, posts }) {
  return { categories, posts }
}

export default connect(mapStateToProps, actions)(Post)