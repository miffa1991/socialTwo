// константы
const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_NEW_POST = 'POST-CHANGE';

// state
let store = {
   _callBackSubscribe () { //изменения состояния
      console.log('Change state');
   },
   _state: {
      profilePage:{
         postWall: [
            {id:1, message:'Hi. I am good. Thx', likeCount:22},
            {id:2, message:'Go Go Go', likeCount:22}
         ],
         newTextPost: ''
      },
      messagePage:{
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
      }
   },
   getState() {
      return this._state;
   },
   dispatch(action){
      switch (action.type) {
         case UPDATE_TEXT_NEW_POST:
            this._state.profilePage.newTextPost = action.text;
            this._callBackSubscribe(this._state);
            break;
         case ADD_POST:
            let newPost = {
               id:3,
               message:this._state.profilePage.newTextPost,
               likeCount:0
            }
            
            this._state.profilePage.postWall.push(newPost);
            this._state.profilePage.newTextPost = '';
            // debugger;
            this._callBackSubscribe(this._state);
            break;
         default:
            break;
      }
   },

   subscribe(observer) { // Патерн observer перерисовка стейта
      this._callBackSubscribe = observer;
   }

}

//action creator можно просто импортировать в компоненты
export const addNewPostActionCreator = () => ({type:ADD_POST}); 
export const changePostTextActionCreator = (text) => ({type:UPDATE_TEXT_NEW_POST, text:text}); 

window.store = store; // для тестов в консоли, пишем state.

export default store;