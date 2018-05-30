import React from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import {FlatButton} from 'material-ui'
import Down from 'material-ui/svg-icons/action/thumb-down'
import Up from 'material-ui/svg-icons/action/thumb-up'

const CommentItem = ({data}) => (
  <Card className="comment-item">
    <CardHeader
      title={data.author}
    />
    <CardText>
      Score: <strong>{data.score}</strong><br />
      <p>{data.body}</p>
    </CardText>
    <CardActions>
      <FlatButton icon={<Up color="green"/>} onClick={() => alert('up vote')}/>
      <FlatButton icon={<Down color="red"/>} onClick={() => alert('down vote')}/>
      <div className="postitem-buttons">
        <FlatButton label="Editar"/>
        <FlatButton label="Excluir"/>
      </div>
    </CardActions>
  </Card>
)

export default CommentItem