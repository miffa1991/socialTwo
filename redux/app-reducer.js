import { getAuth } from "./auth-reducer";

// константы
const SET_INITIALIZED_SUCCESS = 'SET_INITIALIZED_SUCCESS';

let initialState = {
   initialized: false
};

let appReducer = (state = initialState, action) => {

   switch (action.type) {

      case SET_INITIALIZED_SUCCESS:

         return {
            ...state,
            initialized:true
         };
         
      default:
         return {
            ...state
         };
   }
}


//action creator можно просто импортировать в компоненты

const intializedSuccess = () =>({type:SET_INITIALIZED_SUCCESS});




export const intializedApp = () =>  (dispatch) => {
   let promise = dispatch(getAuth());
   Promise.all([promise]).then(()=>{
      dispatch(intializedSuccess());
   })
}





export default appReducer;