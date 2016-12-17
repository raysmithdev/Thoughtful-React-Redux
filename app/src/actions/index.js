import fetch from 'isomorphic-fetch'
const apiUrl = 'https://nameless-depths-24365.herokuapp.com'

const receiveData = (posts) => {
  return {
    type: 'RECEIVE_DATA',
    posts
  }
}

export const addPost = (from, title, body) =>  {
  return dispatch => {
    return fetch(apiUrl + '/create-post', {
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
    return fetch(apiUrl + '/posts')
           .then(response => response.json())
           .then(posts => dispatch(receiveData(posts)))
  }
}
