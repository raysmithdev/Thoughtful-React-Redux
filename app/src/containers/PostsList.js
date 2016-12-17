import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostsListView  from '../components/PostsListView'
import { getPosts } from '../actions'

class PostsList extends Component {

  componentWillMount() {
    this.props.fetchPosts()
    // this.props.dispatch(getPosts())
  }

  render() {
    return (
      <PostsListView {...this.props} />
    )
  }
}


const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(getPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)
