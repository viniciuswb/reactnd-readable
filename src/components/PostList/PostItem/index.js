import React from 'react'
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Down from 'material-ui/svg-icons/action/thumb-down'
import Up from 'material-ui/svg-icons/action/thumb-up'
import {stringTruncate} from '../../../utils/helpers'

import "./PostItem.css"

const Post = ({title, author, comments, score, body}) => (
  <div className="PostItem">
    <Card>
      <CardHeader
        title={title}
        subtitle={author}
      />
      <CardText>
        Comentários: <strong>{comments}</strong> / Score: <strong>{score}</strong>
        <br/>
        {/*Resume of body, if has more than 140 characters trim text and add ...*/}
        <p>
          {stringTruncate(body, 140)}&nbsp;
          <a className="PostItem-Link" href="#">Ver detalhes</a>
        </p>
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