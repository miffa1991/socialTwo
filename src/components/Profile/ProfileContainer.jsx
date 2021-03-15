import React from 'react';
import { connect } from 'react-redux';
import Profile from "./Profile";
import { getProfile, updateStatus, getStatus, saveAvatar, editProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
// import { withAuthRedirect } from '../../redux/hoc/withAuthRedirect';

class ProfileContainer extends React.Component{

   refreshProfile(){
      let userID = this.props.match.params.userID;
      if(!userID){
         userID = this.props.authID;
         if(!userID){
            this.props.history.push('/login');
         }
      }

      this.props.getProfile(userID); // thunk из profile-reducer, получаем данные пользователя
      this.props.getStatus(userID); // thunk из profile-reducer, получаем статус пользователя
      
   }
   componentDidMount(){
      this.refreshProfile();
   }
   componentDidUpdate(prevProps, prevState){
      if(this.props.match.params.userID !== prevProps.match.params.userID){
         this.refreshProfile();
      }
   }
   render(){
      
      return(
         <Profile {...this.props} 
                  profile={this.props.profile} 
                  status={this.props.status} 
                  updateStatus={this.props.updateStatus}
                  isOwner={!this.props.match.params.userID}
                  saveAvatar={this.props.saveAvatar}
                  editProfile={this.props.editProfile}/>
      );
   }
}



let mapStateToProps = (state) => ({
   profile:state.profilePage.profile,
   status:state.profilePage.status,
   authID:state.auth.id,
   isLogin:state.auth.isLogin
});

export default compose(
   connect(mapStateToProps, {getProfile, updateStatus, getStatus, saveAvatar, editProfile }),
   withRouter,
   // withAuthRedirect
)(ProfileContainer);
