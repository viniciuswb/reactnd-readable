import React from 'react'
import PropTypes from 'prop-types'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Down from 'material-ui/svg-icons/action/thumb-down'
import Up from 'material-ui/svg-icons/action/thumb-up'
import {stringTruncate} from '../../../utils/Helpers'

const Post = ({title, author, comments, score, body}) => (
  <div className="postitem">
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
          <a className="postitem-link" href="/">Ver detalhes</a>
        </p>
      </CardText>
      <CardActions>
        <FlatButton icon={<Up color="green"/>}/>
        <FlatButton icon={<Down color="red"/>}/>

        <div className="postitem-buttons">
          <FlatButton label="Editar"/>
          <FlatButton label="Excluir"/>
        </div>
      </CardActions>
    </Card>
  </div>
)

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  comments: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired
}

export default Post