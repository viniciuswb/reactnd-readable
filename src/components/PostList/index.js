import React from 'react'
import PostItem from './PostItem'

const Post = ({posts}) => (
  <div className="postlist">
    {posts.map(post => <PostItem
      key={post.id}
      title={post.title}
      author={post.author}
      comments={post.commentCount}
      score={post.voteScore}
      body={post.body}
    />)}
  </div>
)

export default Post