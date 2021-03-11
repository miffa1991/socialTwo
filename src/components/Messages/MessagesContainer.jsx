import { connect } from 'react-redux';
import { addNewMessageActionCreator } from '../../redux/dialogs-reducer';
import Messages from './Messages';

   let mapStateToProps = (state) => {
      return {
         dialogArr:state.messagePage.dialogArr,
         messageArr:state.messagePage.messageArr
      }
   }

   let mapDispatchToProps = (dispatch) => {
      return {
         addMessage: (message) => {
            dispatch(addNewMessageActionCreator(message));
         },
      }
   }
   
   const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);
   export default MessagesContainer;