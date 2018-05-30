import React, {Component} from 'react'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import { FlatButton } from 'material-ui'

class CommentList extends Component {
  render() {
    return (
      <div className="comment-list">
        <h2>Comentários</h2>
        <Card className="comment-item">
          <CardHeader
            title="Autor do Comentário"
          />
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
          <CardActions>
            <FlatButton label="Action1"/>
            <FlatButton label="Action2"/>
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default CommentList