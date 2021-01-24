import { connect } from 'react-redux';
import { addNewPostActionCreator} from '../../../redux/profile-reducer';
import Posts from './Posts';


let mapStateToProps = (state) => {
   return {
      posts: state.profilePage.postWall
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      addPost:(text) => {
         dispatch(addNewPostActionCreator(text)); 
      },
   }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;