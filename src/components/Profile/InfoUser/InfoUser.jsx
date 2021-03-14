import Preloader from '../../common/Preloader/Preloader';
import s from './InfoUser.module.css';
import StatusUserWithHook from './StatusUserWithHook';
import avatar from '../../../assets/img/avatar.jpg';

const InfoUser = (props) => {
   if(!props.profile){
      return  <Preloader />
   }
   const onChangeFile = (e) => {
      if(e.target.files.length) {
         props.saveAvatar(e.target.files[0]);
      }
   }
   return(
      <div className={s.infoUser}>
         <div className="name">{props.profile.fullName}</div>
         <div className="aboutMe">{props.profile.aboutMe}</div>
         <img src={props.profile.photos.large === null ? avatar : props.profile.photos.large } className="avatar" alt=""/>
         {props.isOwner && <input type={'file'} onChange={onChangeFile} />}
         {/* <div className="statusLife">{props.profile.lookingForAJobDescription}</div> */}
         <StatusUserWithHook status={props.status} updateStatus={props.updateStatus} />

      </div>
   );
}

export default InfoUser;