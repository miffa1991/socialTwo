import { userAPI } from "./../api/api";

// константы
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const CURRENT_PAGE = 'CURRENT_PAGE';
const TOTAL_USERS = 'TOTAL_USERS'; 
const IS_FETCHING = 'IS_FETCHING'; 
const IS_DISABLE_BUTTONS = 'IS_DISABLE_BUTTONS'; 

let initialState = {
   users: [],
   count: 10, // Количество пользователей на странице
   currentPage: 1, // Текущая страница
   totalCount: 20, // Количество пользователей
   fetching: true,
   disable:[]
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
      case IS_DISABLE_BUTTONS:

         return {
            ...state, disable: action.isFetching
            ? [...state.disable, action.userId]
            : state.disable.filter(id => id !== action.userId)
         };

         
      default:
         return state;
   }
}


//action creator можно просто импортировать в компоненты
export const followAC = (userID) => ({type:FOLLOW, id:userID}); 
export const unFollowAC = (userID) => ({type:UNFOLLOW, id:userID}); 
export const setUsers = (users) => ({type:SET_USERS, users}); 
export const setCurrentPage = (currentPage) => ({type:CURRENT_PAGE, count:currentPage});
export const setPageCount = (totalCount) => ({type:TOTAL_USERS, totalCount}); 
export const isFetching = (fetching) => ({type:IS_FETCHING, fetching}); 
export const isDisable = (isFetching, userId) => ({ type: IS_DISABLE_BUTTONS, isFetching, userId });




//dispatch thunk

export const getUsers = (currentPage, pageSize) => {
	return async (dispatch) => {
		dispatch(isFetching(true));
		const data = await userAPI.setUsers(currentPage, pageSize);
		dispatch(isFetching(false));
		dispatch(setUsers(data.items));
		dispatch(setPageCount(data.totalCount));

	}
}

export const follow = (userId) => {
	return async (dispatch) => {
		dispatch(isDisable(true, userId));
		const response = await userAPI.getFollow(userId);
		if (response.data.resultCode === 0) {
			dispatch(followAC(userId));
		}
		dispatch(isDisable(false, userId));
	}
}

export const unfollow = (userId) => {
	return async (dispatch) => {
		dispatch(isDisable(true, userId));
		const response = await userAPI.getUnFollow(userId);
		if (response.data.resultCode === 0) {
			dispatch(unFollowAC(userId));
		}
		dispatch(isDisable(false, userId));
	}
}



export default usersReducer;