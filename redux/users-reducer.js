// константы
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const CURRENT_PAGE = 'CURRENT_PAGE';
const TOTAL_USERS = 'TOTAL_USERS'; 

let initialState = {
   users: [],
   count: 10, // Количество пользователей на странице
   currentPage: 1, // Текущая страница
   totalCount: 20 // Количество пользователей
};

let usersReducer = (state = initialState, action) => {

   switch (action.type) {

      case SET_USERS:

         return {
            ...state,
            users:[...action.users]
      };

      case CURRENT_PAGE:

         return {
            ...state,
            currentPage:action.count
      };
      case TOTAL_USERS:

         return {
            ...state,
            totalCount:action.totalCount
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
export const setUsersAC = (users) => ({type:SET_USERS, users}); 
export const setCurrentPageAC = (currentPage) => ({type:CURRENT_PAGE, count:currentPage});
export const setPageCountAC = (totalCount) => ({type:TOTAL_USERS, totalCount}); 

export default usersReducer;