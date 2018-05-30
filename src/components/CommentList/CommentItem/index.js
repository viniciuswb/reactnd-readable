import React from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import {FlatButton} from 'material-ui'
import Down from 'material-ui/svg-icons/action/thumb-down'
import Up from 'material-ui/svg-icons/action/thumb-up'

const CommentItem = ({data, vote}) => (
  <Card className="comment-item">
    <CardHeader
      title={data.author}
    />
    <CardText>
      Score: <strong>{data.voteScore}</strong><br />
      <p>{data.body}</p>
    </CardText>
    <CardActions>
      <FlatButton icon={<Up color="green"/>} onClick={() => vote(data.id, 'upVote')}/>
      <FlatButton icon={<Down color="red"/>} onClick={() => vote(data.id, 'downVote')}/>
      <div className="postitem-buttons">
        <FlatButton label="Editar"/>
        <FlatButton label="Excluir"/>
      </div>
    </CardActions>
  </Card>
)

export default CommentItem