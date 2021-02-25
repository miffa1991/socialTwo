import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLength, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControl/FormControls';
import s from './Posts.module.css';

const maxLength20 = maxLength(20);
const PostForm = (props) => {
   return (
      <form className={s.addPostWall} onSubmit={props.handleSubmit}>
         <Field component={Textarea} name="post" cols="30" rows="10" validate={[required, maxLength20]} />
         <button>Send</button>
      </form>
   )
}

const AddPostReduxForm = reduxForm({
   form: 'addPost'
})(PostForm);


const AddPostForm = (props) =>{
   const addPost = (formData) => {
       console.log(formData.post);
      props.addPost(formData.post);
   }
   return <AddPostReduxForm onSubmit={addPost} />
}


export default AddPostForm;