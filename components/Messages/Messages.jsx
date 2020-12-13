import React from 'react';
import s from './Messages.module.css';
import Dialogs from './Dialogs/Dialogs';
import MessageItem from './MessageItem/MessageItem';

const Messages = (props) =>{
   // debugger;
   let dialogElements = props.dialogArr.map( d => (<Dialogs name={d.name} id={d.id} />));
   let messageElements = props.messageArr.map( m => (<MessageItem message={m.message} />));
   //let messageElementRef = React.createRef(); //створюемо пусту ссылку
   let addMessage = () => {
      props.addMessage();
   }
   let changeMessage = (e) => {
      let text = e.target.value;
      props.changeMessage(text);
   }
   
   return (
      <div className={s.dialogsContainer}>
         <div className={s.dialogs} >
            {dialogElements}
         </div>
         <div className={s.messagesSend} >
            {messageElements}
            <div>
               <textarea onChange={changeMessage} value={props.newTextMessage} name="" id="" cols="30" rows="10"></textarea>
               <button onClick={addMessage} >Send Message</button>
            </div>
         </div>
      </div>
      );
   }
   
   export default Messages;