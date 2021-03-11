import React from 'react';
import s from './Messages.module.css';
import Dialogs from './Dialogs/Dialogs';
import MessageItem from './MessageItem/MessageItem';
import MessageForm from './MessageForm';

const Messages = (props) =>{
   // debugger;
   let dialogElements = props.dialogArr.map( d => (<Dialogs name={d.name} key={d.id} id={d.id} />));
   let messageElements = props.messageArr.map( m => (<MessageItem message={m.message} key={m.id} />));
   //let messageElementRef = React.createRef(); //створюемо пусту ссылку

   // let changeMessage = (e) => {
   //    let text = e.target.value;
   //    props.changeMessage(text);
   // }
   
   return (
      <div className={s.dialogsContainer}>
         <div className={s.dialogs} >
            {dialogElements}
         </div>
         <div className={s.messagesSend} >
            {messageElements}
            <MessageForm addMessage = {props.addMessage} />
         </div>
      </div>
      );
   }
   
   export default Messages;