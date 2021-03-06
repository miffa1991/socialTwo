import { updateObjectInArray } from "../utils/object-helpers";
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
         users: updateObjectInArray(state.users, action.userID, 'id', {followed: true})
      };
      
      case UNFOLLOW:
      
      return {
         ...state,
         users: updateObjectInArray(state.users, action.userID, 'id', {followed: false}) 
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
export const followAC = (userID) => ({type:FOLLOW, userID}); 
export const unFollowAC = (userID) => ({type:UNFOLLOW, userID}); 
export const setUsers = (users) => ({type:SET_USERS, users}); 
export const setCurrentPage = (currentPage) => ({type:CURRENT_PAGE, count:currentPage});
export const setPageCount = (totalCount) => ({type:TOTAL_USERS, totalCount}); 
export const isFetching = (fetching) => ({type:IS_FETCHING, fetching}); 
export const isDisable = (isFetching, userId) => ({ type: IS_DISABLE_BUTTONS, isFetching, userId });




//dispatch thunk

export const getUsers = (currentPage, pageSize) =>  async (dispatch) => {
   dispatch(isFetching(true));
   dispatch(setCurrentPage(currentPage))
   const data = await userAPI.setUsers(currentPage, pageSize);
   dispatch(isFetching(false));
   dispatch(setUsers(data.items));
   dispatch(setPageCount(data.totalCount));
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => { 
   //виносимо код з follow, unfollow який дублюється в окрему функцію
   dispatch(isDisable(true, userId));
   const response = await apiMethod(userId);
   if (response.data.resultCode === 0) {
      dispatch(actionCreator(userId));
   }
   dispatch(isDisable(false, userId));
}

export const follow = (userId) =>  async (dispatch) => {
   followUnfollowFlow(dispatch, userId, userAPI.getFollow.bind(userId), followAC);
}

export const unfollow = (userId) => async (dispatch) => {
   followUnfollowFlow(dispatch, userId, userAPI.getUnFollow.bind(userId), unFollowAC);
}



export default usersReducer;