import React from 'react';
import { addNewMessageActionCreator, changeMessageTextActionCreator } from '../../redux/dialogs-reducer';
import Messages from './Messages';

const MessagesContainer = (props) =>{
   debugger;

   let addMessage = () => {
      props.dispatch(addNewMessageActionCreator());
   }
   let changeMessage = (text) => {
      props.dispatch(changeMessageTextActionCreator(text));
   }
   return (
      <Messages   dialogArr={props.state.dialogArr} 
                  addMessage={addMessage}
                  changeMessage={changeMessage}
                  messageArr={props.state.messageArr}
                  newTextMessage={props.state.newTextMessage} />
      );
   }
   
   export default MessagesContainer;