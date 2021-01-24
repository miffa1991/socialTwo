import {combineReducers, createStore, applyMiddleware, compose} from 'redux'; 
import thunkMiddleware from 'redux-thunk';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import { reducer as formReducer } from 'redux-form'

let reducersBox = combineReducers({
   profilePage:profileReducer,
   messagePage:dialogsReducer,
   userPage: usersReducer,
   auth:authReducer,
   form: formReducer //reducer redux-form
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//настройка расширения для хрома

const store = createStore(reducersBox, composeEnhancers(
	applyMiddleware(thunkMiddleware))
);


window.store = store; // для тестов в консоли, пишем store.
export default store;