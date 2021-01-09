// константы
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const CURRENT_PAGE = 'CURRENT_PAGE';
const TOTAL_USERS = 'TOTAL_USERS'; 
const IS_FETCHING = 'IS_FETCHING'; 

let initialState = {
   users: [],
   count: 10, // Количество пользователей на странице
   currentPage: 1, // Текущая страница
   totalCount: 20, // Количество пользователей
   fetching: true
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
				...state,
				users: state.users.map(u => {
					if (u.id === action.id) {
						return { ...u, followed: true };
					}
					return u;
				})
      };
         
      case UNFOLLOW:

            return {
               ...state,
               users: state.users.map(u => {
                  if (u.id === action.id) {
                     return { ...u, followed: false };
                  }
                  return u;
               })
            };
            
      case IS_FETCHING:

         return {
            ...state,
            fetching:action.fetching
         };
      default:
         return state;
   }
}


//action creator можно просто импортировать в компоненты
export const follow = (userID) => ({type:FOLLOW, id:userID}); 
export const unfollow = (userID) => ({type:UNFOLLOW, id:userID}); 
export const setUsers = (users) => ({type:SET_USERS, users}); 
export const setCurrentPage = (currentPage) => ({type:CURRENT_PAGE, count:currentPage});
export const setPageCount = (totalCount) => ({type:TOTAL_USERS, totalCount}); 
export const isFetching = (fetching) => ({type:IS_FETCHING, fetching}); 

export default usersReducer;