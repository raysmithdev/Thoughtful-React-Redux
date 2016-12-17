import React from 'react'

const PostsListView = ({ posts }) => (
  <ul>
    {posts.map((post, index) => (
      <li key={index}>
        <h1>{post.title}</h1>
        <p>{post.from}: {post.body}</p>
      </li>
    ))}
  </ul>
)

export default PostsListView
