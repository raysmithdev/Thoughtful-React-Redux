import fetch from 'isomorphic-fetch'

const receiveData = (posts) => {
  return {
    type: 'RECEIVE_DATA',
    posts
  }
}

export const addPost = (from, title, body) =>  {
  return dispatch => {
    return fetch('http://localhost:8080/create-post', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                from,
                title,
                body
              })
            })
            .then(response => response.json())
            .then(posts => dispatch(receiveData(posts)))
  }
}

export const getPosts = () => {
  return dispatch => {
    return fetch('http://localhost:8080/posts')
           .then(response => response.json())
           .then(posts => dispatch(receiveData(posts)))
  }
}
