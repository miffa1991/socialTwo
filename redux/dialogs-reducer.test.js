import dialogsReducer, { addNewMessageActionCreator } from "./dialogs-reducer";



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

let action = addNewMessageActionCreator('IT-Kamasutra');

it ('length of posts profile-page', () => {
  
   let newState = dialogsReducer(initialState, action);

   expect(newState.messageArr.length).toBe(4);
   
}) 

it ('name of posts profile-page', () => {
  
   let newState = dialogsReducer(initialState, action);

   expect(newState.messageArr[3].message).toBe('IT-Kamasutra');
   
}) 