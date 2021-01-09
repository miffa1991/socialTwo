// константы
const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_NEW_POST = 'POST-CHANGE';
const PROFILE_STATE = 'PROFILE_STATE';

let initialState = {
   postWall: [
      {id:1, message:'Hi. I am good. Thx', likeCount:22},
      {id:2, message:'Go Go Go', likeCount:22},
      {id:3, message:'Go Go Go', likeCount:23}
   ],
   newTextPost: '',
   profile: null
};

let profileReducer = (state = initialState, action) => {

   switch (action.type) {

      case ADD_POST:
         let newPost = {
            id:5,
            message:state.newTextPost,
            likeCount:0
         }

         return {
            ...state,
            postWall:[...state.postWall, newPost],
            newTextPost: ''
         };
      case UPDATE_TEXT_NEW_POST:

         return {
            ...state,
            newTextPost: action.text
         };
      case PROFILE_STATE:

      return {
         ...state,
         profile: action.profile
      };
         
      default:
         return {
            ...state
         };
   }
}


//action creator можно просто импортировать в компоненты
export const addNewPostActionCreator = () => ({type:ADD_POST}); 
export const changePostTextActionCreator = (text) => ({type:UPDATE_TEXT_NEW_POST, text:text}); 
export const profileState = (profile) =>({type:PROFILE_STATE, profile});
export default profileReducer;