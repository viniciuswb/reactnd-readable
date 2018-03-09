import React from 'react'
import { SelectField, MenuItem, Dialog, TextField } from 'material-ui'

const Modal = ({
  open, 
  close, 
  title, 
  body, 
  author, 
  category, 
  setTitle, 
  setBody, 
  setAuthor, 
  setCategory, 
  updating, 
  categories, 
  actions
}) => (
  <Dialog
    title="Criar nova postagem"
    actions={actions}
    modal={false}
    open={open}
    onRequestClose={close}
  >
    <TextField
      hintText="Digite o título..."
      floatingLabelText="Título do post"
      name="title"
      fullWidth={true}
      value={title}
      onChange={setTitle}
    />
    <TextField
      hintText="Escreva a postagem..."
      floatingLabelText="Corpo do post"
      name="body"
      fullWidth={true}
      multiLine={true}
      value={body}
      onChange={setBody}
    />
    <TextField
      hintText="Digite o autor..."
      floatingLabelText="Autor do post"
      name="author"
      disabled={updating ? true : false}
      fullWidth={true}
      value={author}
      onChange={setAuthor}
    />
    <SelectField
      floatingLabelText="Categoria"
      fullWidth={true}
      name="category"
      disabled={updating ? true : false}
      value={category}
      onChange={setCategory}
    >
      {categories &&
        categories.map(categorie =>
          <MenuItem key={categorie.name} value={categorie.name} primaryText={categorie.name} />)
      }
    </SelectField>
  </Dialog>
)

export default Modal