import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

// константы
const SET_AUTH = 'SET_AUTH/auth';

let initialState = {
   id: null,
   email: null,
   login:null,
   isLogin: false
};

let authReducer = (state = initialState, action) => {

   switch (action.type) {

      case SET_AUTH:

         return {
            ...state,
            ...action.payload
         };
         
      default:
         return {
            ...state
         };
   }
}


//action creator можно просто импортировать в компоненты

const setAuth = (id, email, login, isLogin) =>({type:SET_AUTH, payload:{id, email, login, isLogin }});




export const getAuth = () => async (dispatch) => {
   
	let response = await authAPI.me();
	if (response.data.resultCode === 0) {
      let {id, email, login} = response.data.data; 
		dispatch(setAuth(id, email, login, true));
	}
   
}

export const login = (email, password, rememberMe) => async (dispatch) => {

	let response = await authAPI.login(email, password, rememberMe);
	if (response.data.resultCode === 0) {
		dispatch(getAuth());
	} else {
      let messages = response.data.messages ? response.data.messages[0] : 'some error';
      dispatch(stopSubmit('login', {_error:messages}));
   }

}

export const logout = () => async (dispatch) => {

	let response = await authAPI.logout();
	if (response.data.resultCode === 0) {
      dispatch(setAuth(null, null, null, false));
	}

}


export default authReducer;