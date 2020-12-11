import { connect } from 'react-redux';
import { addNewMessageActionCreator, changeMessageTextActionCreator } from '../../redux/dialogs-reducer';
import Messages from './Messages';

   let mapStateToProps = (state) => {
      return {
         dialogArr:state.messagePage.dialogArr,
         messageArr:state.messagePage.messageArr,
         newTextMessage:state.messagePage.newTextMessage
      }
   }

   let mapDispatchToProps = (dispatch) => {
      return {
         addMessage: () => {
            dispatch(addNewMessageActionCreator());
         },
         changeMessage: (text) => {
            dispatch(changeMessageTextActionCreator(text));
         }
      }
   }
   
   const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);
   export default MessagesContainer;