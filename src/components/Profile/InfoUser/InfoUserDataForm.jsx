
import { Field, reduxForm } from 'redux-form';
import { required } from '../../../utils/validators/validators';
import { Input, Textarea } from '../../common/FormsControl/FormControls';
import s from './InfoUser.module.css';

const InfoUserDataFormSend = ({ handleSubmit, profile, error }) => {
   return <form onSubmit={handleSubmit} >   
      
      <div className={s.info_profile}>
      <div className={s.name}>
         Name: <Field   component={Input} 
                        validate={required} 
                        name={'fullName'} 
                        placeholder={'full Name'}/>
      </div> 
      <div>
         Looking a job: <Field   component={Input} 
                                 type={'checkbox'} 
                                 name={'lookingForAJob'} />
      </div>
      <div className={s.statusLife}>
         My skills:  <Field   component={Textarea} 
                              validate={required} 
                              name={'lookingForAJobDescription'} 
                              placeholder={'looking For A Job Description'} />
         </div>
      <div className={s.aboutMe}>
         About me: <Field  component={Textarea} 
                           validate={required} 
                           name={'aboutMe'} 
                           placeholder={'about Me'} />
      </div>            
            <div>Contacts:
               <ul className={s.soc_contact}>
               {Object.keys(profile.contacts).map( key => {
                     return <li key={key}>{key}: <Field   component={Input} 
                     name={'contacts.' + key} 
                     placeholder={key}
                     />
                     </li>
                  })}
               </ul>
            </div>
            {error && <div>{error}</div>}
            <button>Save</button>
            </div>
   </form>
}

const InfoUserDataFormReduxForm = reduxForm({
   form: 'edit-profile'
})(InfoUserDataFormSend);


const InfoUserDataForm = (props) => {
   
   const onSubmit = (formData) => {
      props.onSubmit(formData);
    
      console.log(formData);
   }
   return <div>
      
      <InfoUserDataFormReduxForm onSubmit={props.onSubmit} profile={props.profile} initialValues={props.profile} onSubmit={onSubmit} />
   </div>
}

export default InfoUserDataForm;