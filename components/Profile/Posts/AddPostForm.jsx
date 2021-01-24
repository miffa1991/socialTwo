import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './Posts.module.css';

const PostForm = (props) => {
   return (
      <form className={s.addPostWall} onSubmit={props.handleSubmit}>
         <Field component={'textarea'} name="post" cols="30" rows="10" />
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