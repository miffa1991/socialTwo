import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

// константы
const SET_AUTH = 'SET_AUTH/auth';
const SET_CAPTCHA = 'SET_CAPTCHA/auth';

let initialState = {
   id: null,
   email: null,
   login:null,
   isLogin: false,
   captchaUrl: null
};

let authReducer = (state = initialState, action) => {
   
   switch (action.type) {
      case SET_CAPTCHA:
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
const setCaptcha = (captchaUrl) =>({type:SET_CAPTCHA, payload:{captchaUrl}});


export const getAuth = () => async (dispatch) => {
   
   let response = await authAPI.me();
   if (response.data.resultCode === 0) {
      let {id, email, login} = response.data.data; 
      dispatch(setAuth(id, email, login, true));
   }
   
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
   
   let response = await authAPI.login(email, password, rememberMe, captcha);
   if (response.data.resultCode === 0) {
      dispatch(getAuth());
   } else {
      if (response.data.resultCode === 10) {
         dispatch(getCaptcha()); // диспатчим урл капчи
      }
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


export const getCaptcha = () => async (dispatch) => { //получаем урл капчи
   
   const response = await securityAPI.captcha();
   const captcha = response.data.url;
   dispatch(setCaptcha(captcha)); //диспачим урл в стейт
   console.log(captcha);
   
}




export default authReducer;