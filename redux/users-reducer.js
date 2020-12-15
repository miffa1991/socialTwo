// константы
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
   users: []
};

let usersReducer = (state = initialState, action) => {

   switch (action.type) {

      case SET_USERS:
         
         return {
            ...state,
            users:[...state.users, ...action.users]
      };

      case FOLLOW:

         return {
            ...state
         };
      case UNFOLLOW:

         return {
            ...state
         };
         
      default:
         return state;
   }
}


//action creator можно просто импортировать в компоненты
export const followAC = (userID) => ({type:FOLLOW, id:userID}); 
export const unfollowAC = (userID) => ({type:UNFOLLOW, id:userID}); 
export const setUsersAC = (users) => ({type:SET_USERS, users:users}); 

export default usersReducer;