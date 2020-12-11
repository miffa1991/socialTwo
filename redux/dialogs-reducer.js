// константы
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_TEXT_NEW_MESSAGE = 'UPDATE_TEXT_NEW_MESSGE';

let initialState = {
      dialogArr: [
         {id:1, name:'Vadym'},
         {id:2, name:'Kolya'},
         {id:3, name:'Sveta'}
      ],
      messageArr: [
         {id:1, message:'hi'},
         {id:2, message:'How are you?'},
         {id:3, message:'How are you?'}
      ],
      newTextMessage: ''
};

let dialogsReducer = (state = initialState, action) => {

   switch (action.type) {

      case ADD_MESSAGE:
         let newMessage = {
            id:5,
            message:state.newTextMessage,
         }
         return {
            ...state,
            messageArr: [...state.messageArr, newMessage],
            newTextMessage: ''
         }
      case UPDATE_TEXT_NEW_MESSAGE:
         return {
            ...state,
            newTextMessage: action.text
         };
      default:
         return state;
   }
}


//action creator можно просто импортировать в компоненты
export const addNewMessageActionCreator = () => ({type:ADD_MESSAGE}); 
export const changeMessageTextActionCreator = (text) => ({type:UPDATE_TEXT_NEW_MESSAGE, text:text}); 

export default dialogsReducer;