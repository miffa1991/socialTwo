import {combineReducers, createStore} from 'redux'; 
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';

let reducers = combineReducers({
   profilePage:profileReducer,
   messagePage:dialogsReducer,
   userPage: usersReducer,
   auth:authReducer
});

let store = createStore(reducers);

window.store = store; // для тестов в консоли, пишем store.
export default store;