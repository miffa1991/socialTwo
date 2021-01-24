import { authAPI } from "../api/api";

// константы
const SET_AUTH = 'SET_AUTH';

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
            ...action.data,
            isLogin: true
         };
         
      default:
         return {
            ...state
         };
   }
}


//action creator можно просто импортировать в компоненты

const setAuth = (id, login, email) =>({type:SET_AUTH, data:{id, login, email }});




export const getAuth = () => async (dispatch) => {

	let response = await authAPI.getAuth();
	if (response.data.resultCode === 0) {
		dispatch(setAuth(null, null, null, false));
	}

}

export default authReducer;