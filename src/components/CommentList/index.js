import React, {Component} from 'react'
import CommentItem from "./CommentItem"
import { connect } from 'react-redux'
import * as actions from "../../actions"

class CommentList extends Component {
  componentDidMount() {
    this.props.fetchComments(this.props.postId)
  }

  render() {
    return (
      <div className="comment-list">
        <h2>Comentários</h2>
        {this.props.comments
          .filter(comment => comment.deleted !== true)
          .map((comment, index) => <CommentItem key={index} data={comment} />)}
      </div>
    )
  }
}

function mapStateToProps({ comments }) {
  return { comments }
}

export default connect(mapStateToProps, actions)(CommentList)