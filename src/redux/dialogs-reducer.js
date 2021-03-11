// константы
const ADD_MESSAGE = 'ADD_MESSAGE';

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
      ]
};

let dialogsReducer = (state = initialState, action) => {

   switch (action.type) {

      case ADD_MESSAGE:
         let newMessage = {
            id:5,
            message:action.newTextMessage,
         }
         return {
            ...state,
            messageArr: [...state.messageArr, newMessage]
         }

      default:
         return state;
   }
}


//action creator можно просто импортировать в компоненты
export const addNewMessageActionCreator = (newTextMessage) => ({type:ADD_MESSAGE, newTextMessage}); 
// export const changeMessageTextActionCreator = (text) => ({type:UPDATE_TEXT_NEW_MESSAGE, text:text}); 

export default dialogsReducer;