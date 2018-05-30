import React, {Component} from 'react'
import CommentItem from "./CommentItem"

class CommentList extends Component {
  state = {
    comments: [
      {
        author: 'Author 1',
        body: 'Lorem ipsum dolor sit amet, consectetur donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.',
        score: 5
      },
      {
        author: 'Author 2',
        body: 'Lorem ipsum dolor sit amet, consectetur donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.',
        score: 3
      },
      {
        author: 'Author 3',
        body: 'Lorem ipsum dolor sit amet, consectetur donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.',
        score: -5
      },
      {
        author: 'Author 4',
        body: 'Lorem ipsum dolor sit amet, consectetur donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.',
        score: 10
      },
      {
        author: 'Author 5',
        body: 'Lorem ipsum dolor sit amet, consectetur donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.',
        score: 7
      }
    ]
  }

  render() {
    return (
      <div className="comment-list">
        <h2>Comentários</h2>
        {this.state.comments.map((comment, index) => <CommentItem key={index} data={comment} />)}
      </div>
    )
  }
}

export default CommentList