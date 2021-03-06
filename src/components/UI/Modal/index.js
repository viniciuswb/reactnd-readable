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
  actions,
  modalTitle
}) => (
  <Dialog
    title={modalTitle}
    actions={actions}
    modal={false}
    open={open}
    onRequestClose={close}
  >
    {title !== null && <TextField
      hintText="Digite o título..."
      floatingLabelText="Título"
      name="title"
      fullWidth={true}
      value={title}
      onChange={setTitle}
    />}
    {body !== null && <TextField
      hintText="Escreva a postagem..."
      floatingLabelText="Corpo"
      name="body"
      fullWidth={true}
      multiLine={true}
      value={body}
      onChange={setBody}
    />}
    {author !== null && <TextField
      hintText="Digite o autor..."
      floatingLabelText="Autor"
      name="author"
      disabled={updating ? true : false}
      fullWidth={true}
      value={author}
      onChange={setAuthor}
    /> }
    {category !== null && <SelectField
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
    </SelectField> }
  </Dialog>
)

export default Modal