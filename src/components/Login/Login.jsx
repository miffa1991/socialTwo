import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validators/validators';
import { login, getCaptcha } from '../../redux/auth-reducer';
import { Input } from '../common/FormsControl/FormControls';

const LoginForm = (props) =>{
   
   return(
      <form onSubmit={props.handleSubmit}>
         <div><Field component={Input} validate={required} name={'email'} placeholder={'email'} /></div>
         <div><Field component={Input} validate={required} name={'password'} type={'password'} placeholder={'password'} /></div>
         <div><Field component={Input} type={'checkbox'} name={'rememberMe'} /> remember me</div>
         
         {props.captchaUrl &&
         <div>
            <Field component={Input} name={'captcha'} />
            <img src={props.captchaUrl} alt=""/>
         </div>
         }
         {props.error && <div>{props.error}</div>}
         <div><button>Login</button></div>
      </form>
   )
}

const LoginReduxForm = reduxForm({
   form: 'login'
})(LoginForm);

const Login = (props) =>{
   const onSubmit = (formData) => {
      
      props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
      console.log(formData);
   }
   if(props.isAuth){
      return <Redirect to="/profile/" />
   }
   return <div>
      <h1>Login</h1>
      <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={onSubmit} />
   </div>
}

const mapStateToProps = (state) => ({
   isAuth:state.auth.isLogin,
   captchaUrl: state.auth.captchaUrl
});
export default connect(mapStateToProps, { login, getCaptcha })(Login);