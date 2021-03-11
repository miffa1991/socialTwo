import profileReducer from './profile-reducer';

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
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._callBackSubscribe(this._state);
   },

   subscribe(observer) { // Патерн observer перерисовка стейта
      this._callBackSubscribe = observer;
   }

}


window.store = store; // для тестов в консоли, пишем store.

export default store;