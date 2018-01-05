import React from 'react'
import PostItem from './PostItem'

import "./PostList.css"

const Post = () => (
  <div className="PostList">
    <PostItem
      title="Title of Post"
      author="Author of Post"
      comments={8}
      score={3}
      body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis metus efficitur, molestie ligula sed, mollis sapien. Proin ullamcorper urna sed magna mollis fermentum. Vestibulum viverra fermentum egestas. Aenean consequat, elit at pellentesque convallis, purus sapien gravida ex, commodo semper est nisl rutrum lacus. Cras gravida posuere libero. Sed ullamcorper mauris sit amet lorem placerat, eget rutrum mi vestibulum. "
    />
  </div>
)

export default Post