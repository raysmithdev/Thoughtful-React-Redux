import React from 'react'
// import TextField from 'material-ui/TextField'

const AddPostView = ({ createAPost }) => (
  <form onSubmit={(event) => {
    event.preventDefault()
    let from = event.target.from.value
    let title = event.target.title.value
    let body = event.target.body.value

    createAPost(from, title, body)
  }}
  >
    <input name="from" />
    <input name="title" />
    <input name="body" />
    <button>Submit</button>
  </form>
);

export default AddPostView


{/* <TextField
  hintText="From"
  onClick={() => console.log('Clicked!')}
/>
<TextField
  hintText="Title"
/>
<TextField
  hintText="Body"
/> */}
