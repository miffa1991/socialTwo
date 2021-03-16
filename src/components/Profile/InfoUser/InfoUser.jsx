import {useState} from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './InfoUser.module.css';
import StatusUserWithHook from './StatusUserWithHook';
import avatar from '../../../assets/img/avatar.jpg';
import InfoUserDataForm from './InfoUserDataForm';


const InfoUser = (props) => {
   const [editMode, setstate] = useState(false);
   if(!props.profile){
      return  <Preloader />
   }
   
   const onChangeFile = (e) => {
      if(e.target.files.length) {
         props.saveAvatar(e.target.files[0]);
      }
   }
   const activeMode = () => {
      setstate(true);  // меняем локальний стейт
   }

   const onSubmit = (formData) => {
      props.editProfile(formData);
      setstate(false);  // меняем локальний стейт
   }

   return(
      <div className={s.infoUser}>
         <div  className={s.avatar} >
            <img src={props.profile.photos.large === null ? avatar : props.profile.photos.large } alt=""/>
            {props.isOwner && <input type={'file'} onChange={onChangeFile} />}
         </div>
         <div className={s.info_profile}>
            <StatusUserWithHook status={props.status} updateStatus={props.updateStatus} />
            {  !editMode 
            ? <InfoUserData isOwner={props.isOwner} profile={props.profile} activeMode={activeMode} />
            : <InfoUserDataForm profile={props.profile} onSubmit={onSubmit} /> } 
         </div>
      </div>
   );
}



const ContactsSoc = ({value, name}) => {
   return <li>{name}: {value}</li>
}



const InfoUserData = (props) => {
   return <div className={s.info_profile}>
      
      <div className={s.name}>Name: {props.profile.fullName}</div>
            <div className={s.aboutMe}>About me: {props.profile.aboutMe}</div>
            <div>Looking a job: {props.profile.lookingForAJob ? "yes" : "no"}</div>
            { props.profile.lookingForAJob && 
            <div className={s.statusLife}>My skills: {props.profile.lookingForAJobDescription}</div> }
            <div>Contacts:
               <ul className={s.soc_contact}>
                  {Object.keys(props.profile.contacts).map( key => {
                     return <ContactsSoc value={props.profile.contacts[key]} key={key} name={key} />
                  })}
               </ul>
            </div>
            {props.isOwner && <button onClick={props.activeMode}>Edit profile</button>}
      </div>
}

export default InfoUser;