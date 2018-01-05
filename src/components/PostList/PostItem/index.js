import React from 'react'
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Down from 'material-ui/svg-icons/action/thumb-down'
import Up from 'material-ui/svg-icons/action/thumb-up'

import "./PostItem.css"

const Post = () => (
  <div className="PostItem">
    <Card>
      <CardHeader
        title="Titulo da Postagem"
        subtitle="Autor da Postagem"
      />
      <CardText>
        Comentários: <strong>35</strong> / Score: <strong>13</strong>
        <br/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi... <a className="PostItem-Link" href="#">Ver postagem</a></p>
      </CardText>
      <CardActions>
        <FlatButton icon={<Up color="green"/>}/>
        <FlatButton icon={<Down color="red"/>}/>

        <div className="PostItem-Buttons">
          <FlatButton label="Editar"/>
          <FlatButton label="Excluir"/>
        </div>
      </CardActions>
    </Card>
  </div>
)

export default Post