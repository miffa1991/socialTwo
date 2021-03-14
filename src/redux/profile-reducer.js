import { profileAPI } from "../api/api";

// константы
const ADD_POST = 'ADD-POST/profile';
const PROFILE_STATE = 'PROFILE_STATE/profile';
const SET_STATUS = 'SET_STATUS/profile';
const SET_AVATAR = 'SET_AVATAR/profile';

let initialState = {
   postWall: [
      {id:1, message:'Hi. I am good. Thx', likeCount:22},
      {id:2, message:'Go Go Go', likeCount:22},
      {id:3, message:'Go Go Go', likeCount:23}
   ],
   profile: null,
   status: 'good'
};

let profileReducer = (state = initialState, action) => {

   switch (action.type) {

      case ADD_POST:
         let newPost = {
            id:5,
            message:action.text,
            likeCount:0
         }

         return {
            ...state,
            postWall:[...state.postWall, newPost]
         };

      case PROFILE_STATE:
         return {
            ...state,
            profile: action.profile
         };

      case SET_STATUS:
         return {
            ...state,
            status: action.status
         };
      case SET_AVATAR:
         
         return {
            ...state,
            profile: {...state.profile, photos:action.photos}
         }
         
      default:
         return {
            ...state
         };
   }
}


//action creator можно просто импортировать в компоненты
export const addNewPostActionCreator = (text) => ({type:ADD_POST, text}); 
// export const changePostTextActionCreator = (text) => ({type:UPDATE_TEXT_NEW_POST, text:text}); 
export const setProfile = (profile) =>({type:PROFILE_STATE, profile});
const setStatus = (status) =>({type:SET_STATUS, status});
const setAvatar = (photos) =>({type:SET_AVATAR, photos});

// thunk

// saveAvatar
export const saveAvatar = (image) => async (dispatch) => {
   
   let response = await  profileAPI.saveAvatar(image);

         dispatch(setAvatar(response.data.data.photos));
    
}


export const getProfile = (userId) => async (dispatch) => {
   let response = await profileAPI.getProfile(userId);
      dispatch(setProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
   let response = await  profileAPI.getStatus(userId);
      dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
   let response = await  profileAPI.updateStatus(status);
      if(response.data.resultcode === 0){
         dispatch(setStatus(response.data));
      }
}

export default profileReducer;