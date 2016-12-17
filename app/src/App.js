import React, { Component } from 'react'
import './App.css'
import AddPost from './containers/AddPost'
import PostsList from './containers/PostsList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddPost />
        <PostsList />
      </div>
    );
  }
}

export default App;
