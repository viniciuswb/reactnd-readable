import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { createPost } from '../../utils/ReadableAPI'
import PostItem from './PostItem'
import { RaisedButton, FlatButton, SelectField, MenuItem, Dialog, TextField } from 'material-ui'

class Post extends Component {
  state = {
    open: false,
    formTitle: '',
    formBody: '',
    formAuthor: '',
    formCategory: null
  }

  handleOpen = () => this.setState({ open: true })
  handleClose = () => this.setState({ open: false })

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
    
    createPost(post)
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
        label="Enviar"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleSubmit}
      />
    ];

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
            fullWidth={true}
            value={this.state.formAuthor}
            onChange={(e) => this.setState({ formAuthor: e.target.value })}
          />
          <SelectField
            floatingLabelText="Categoria"
            fullWidth={true}
            name="category"
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
          title={post.title}
          author={post.author}
          comments={post.commentCount}
          score={post.voteScore}
          body={post.body}
        />)}
      </div>
    )
  }
}

function mapStateToProps({ categories }) {
  return { categories }
}

export default connect(mapStateToProps)(Post)