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

export const setAuth = (id, login, email) =>({type:SET_AUTH, data:{id, login, email }});

export default authReducer;