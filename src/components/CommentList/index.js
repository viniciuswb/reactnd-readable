import React, {Component} from 'react'
import CommentItem from "./CommentItem"

class CommentList extends Component {
  render() {
    return (
      <div className="comment-list">
        <h2>{this.props.comments.length > 1 ? `${this.props.comments.length} Comentários` : `${this.props.comments.length} Comentário`}</h2>
        {this.props.comments
          .filter(comment => comment.deleted !== true)
          .map((comment, index) => <CommentItem key={index} data={comment} />)}
      </div>
    )
  }
}

export default (CommentList)