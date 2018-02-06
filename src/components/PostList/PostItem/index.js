import React from 'react'
import PropTypes from 'prop-types'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Down from 'material-ui/svg-icons/action/thumb-down'
import Up from 'material-ui/svg-icons/action/thumb-up'
import {stringTruncate} from '../../../utils/Helpers'

const Post = ({title, author, comments, score, body, remove, id, category, edit, vote}) => (
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
          {body.length > 140 && <a className="postitem-link" href="/">Ver detalhes</a>}
        </p>
      </CardText>
      <CardActions>
        <FlatButton icon={<Up color="green"/>} onClick={() => vote(id, 'upVote')}/>
        <FlatButton icon={<Down color="red"/>} onClick={() => vote(id, 'downVote')}/>

        <div className="postitem-buttons">
          <FlatButton label="Ver detalhes" onClick={() => alert('detalhes da postagem')} />
          <FlatButton label="Editar" onClick={() => edit(title, body, author, category, id)} />
          <FlatButton label="Excluir" onClick={() => remove(id)}/>
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