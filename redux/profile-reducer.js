// константы
const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_NEW_POST = 'POST-CHANGE';

let initialState = {
   postWall: [
      {id:1, message:'Hi. I am good. Thx', likeCount:22},
      {id:2, message:'Go Go Go', likeCount:22},
      {id:3, message:'Go Go Go', likeCount:23}
   ],
   newTextPost: ''
};

let profileReducer = (state = initialState, action) => {

   switch (action.type) {

      case ADD_POST:
         let newPost = {
            id:5,
            message:state.newTextPost,
            likeCount:0
         }
         
         state.postWall.push(newPost);
         state.newTextPost = '';
         // debugger;
         return state;
      case UPDATE_TEXT_NEW_POST:
         state.newTextPost = action.text;
         return state;
      default:
         return state;
   }
}


//action creator можно просто импортировать в компоненты
export const addNewPostActionCreator = () => ({type:ADD_POST}); 
export const changePostTextActionCreator = (text) => ({type:UPDATE_TEXT_NEW_POST, text:text}); 

export default profileReducer;