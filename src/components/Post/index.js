import React from 'react'
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Down from 'material-ui/svg-icons/action/thumb-down'
import Up from 'material-ui/svg-icons/action/thumb-up'

import "./Post.css"

const Post = () => (
  <div className="Post">
    <Card>
      <CardHeader
        title="Titulo da Postagem"
        subtitle="Autor da Postagem"
      />
      <div className="Post-Info">
        Comentários: <strong>35</strong> / Score: <strong>13</strong>
      </div>
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
      <CardActions>
        <FlatButton icon={<Up color="green"/>}/>
        <FlatButton icon={<Down color="red"/>}/>

        <div className="Post-Buttons">
          <FlatButton label="Editar"/>
          <FlatButton label="Excluir"/>
        </div>
      </CardActions>
    </Card>
  </div>
)

export default Post