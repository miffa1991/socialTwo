import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validators/validators';
import { Textarea } from '../common/FormsControl/FormControls';

const MessageFormSend = (props) => {
   return (
      <form  onSubmit={props.handleSubmit}>
         <Field component={Textarea} validate={required} name={'message'} cols="30" rows="10" />
         <button >Send Message</button>
      </form>
   )
}

const MessageReduxForm = reduxForm({
   form: 'sendMessage'
})(MessageFormSend);


const MessageForm = (props) =>{
   const addMessage = (formData) => {
      props.addMessage(formData.message);
   }
   return <MessageReduxForm onSubmit={addMessage} />
}


export default MessageForm;