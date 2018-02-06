import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import * as actions from '../../actions'
import PostItem from './PostItem'
import { RaisedButton, FlatButton, SelectField, MenuItem, Dialog, TextField } from 'material-ui'

class Post extends Component {
  state = {
    open: false,
    formTitle: '',
    formBody: '',
    formAuthor: '',
    formId: '',
    formCategory: null,
    updating: false
  }

  componentDidMount() {
    if (this.props.category === 'all') {
      this.props.fetchPosts()
    } else {
      this.props.fetchPostsByCategory(this.props.category)
    }
  }

  handleOpen = () => this.setState({ open: true })
  handleClose = () => this.setState({ open: false, formTitle: '', formBody: '', formAuthor: '', formId: '', formCategory: null, updating: false })

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
    const timestamp = moment().format('DD-MM-YYYY')
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

    this.props.updatePost(id, {title, body})
    this.handleClose()
  }

  render() {
    const { posts } = this.props
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

        <Dialog
          title="Criar nova postagem"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <TextField
            hintText="Digite o título..."
            floatingLabelText="Título do post"
            name="title"
            fullWidth={true}
            value={this.state.formTitle}
            onChange={(e) => this.setState({ formTitle: e.target.value })}
          />
          <TextField
            hintText="Escreva a postagem..."
            floatingLabelText="Corpo do post"
            name="body"
            fullWidth={true}
            multiLine={true}
            value={this.state.formBody}
            onChange={(e) => this.setState({ formBody: e.target.value })}
          />
          <TextField
            hintText="Digite o autor..."
            floatingLabelText="Autor do post"
            name="author"
            disabled={this.state.updating ? true : false}
            fullWidth={true}
            value={this.state.formAuthor}
            onChange={(e) => this.setState({ formAuthor: e.target.value })}
          />
          <SelectField
            floatingLabelText="Categoria"
            fullWidth={true}
            name="category"
            disabled={this.state.updating ? true : false}
            value={this.state.formCategory}
            onChange={(e, i, value) => this.setState({ formCategory: value })}
          >
            {this.props.categories && 
              this.props.categories.map(categorie => 
                <MenuItem key={categorie.name} value={categorie.name} primaryText={categorie.name} />)
            }
          </SelectField>
        </Dialog>

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
        />)}
      </div>
    )
  }
}

function mapStateToProps({ categories, posts }) {
  return { categories, posts }
}

export default connect(mapStateToProps, actions)(Post)