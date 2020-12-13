import { connect } from 'react-redux';
import {changePostTextActionCreator, addNewPostActionCreator} from '../../../redux/profile-reducer';
import Posts from './Posts';


let mapStateToProps = (state) => {
   return {
      newTextPost: state.profilePage.newTextPost, 
      posts: state.profilePage.postWall
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      addPost:() => {
         dispatch(addNewPostActionCreator()); 
      },
      changeText:(text) => {
         dispatch(changePostTextActionCreator(text));
      }
   }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;