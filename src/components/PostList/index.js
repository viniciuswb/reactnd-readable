import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostItem from './PostItem'
import {RaisedButton, FlatButton, SelectField, MenuItem, Dialog, TextField} from 'material-ui'

class Post extends Component {
  state = {
    open: false,
    value: null
  }

  handleOpen = () => this.setState({ open: true })
  handleClose = () => this.setState({ open: false })
  handleCategorieChange = (event, index, value) => this.setState({value})

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
        onClick={this.handleClose}
      />,
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
            fullWidth={true}
          />
          <TextField
            hintText="Escreva a postagem..."
            floatingLabelText="Corpo do post"
            fullWidth={true}
            multiLine={true}
          />
          <TextField
            hintText="Digite o autor..."
            floatingLabelText="Autor do post"
            fullWidth={true}
          />
          <SelectField
            floatingLabelText="Categoria"
            fullWidth={true}
            value={this.state.value}
            onChange={this.handleCategorieChange}
          >
            {this.props.categories.map(categorie => <MenuItem key={categorie.name} value={categorie.name} primaryText={categorie.name} />)}
          </SelectField>
        </Dialog>

        {posts.map(post => <PostItem
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

function mapStateToProps({categories}) {
  return {categories}
}

export default connect(mapStateToProps)(Post)