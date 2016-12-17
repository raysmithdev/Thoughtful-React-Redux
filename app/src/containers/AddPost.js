import { connect } from 'react-redux'
import AddPostView  from '../components/AddPostView'
import { addPost } from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    createAPost: (from, title, content) => {
      return dispatch(addPost(from, title, content))
    }
  }
}

export default connect(null, mapDispatchToProps)(AddPostView)
