import React, { Component } from 'react'
import PostItem from './PostItem'
import {RaisedButton, FlatButton, SelectField, MenuItem, Dialog, TextField} from 'material-ui'

class Post extends Component {
  state = {
    open: false
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    const { posts } = this.props

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
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
          >
            <MenuItem value={1} primaryText="Never" />
            <MenuItem value={2} primaryText="Every Night" />
            <MenuItem value={3} primaryText="Weeknights" />
            <MenuItem value={4} primaryText="Weekends" />
            <MenuItem value={5} primaryText="Weekly" />
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

export default Post