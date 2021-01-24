import React from 'react';
import { connect } from 'react-redux';
import Profile from "./Profile";
import { getProfile, updateStatus, getStatus } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../redux/hoc/withAuthRedirect';

class ProfileContainer extends React.Component{

   
   componentDidMount(){
      let userID = this.props.match.params.userID;
      if(!userID){
         userID = 2;
      }
      // debugger;
      // profileAPI.getProfile(userID) //відправляємо запрос на сервер
      // .then(data => { //відповідь з сервера
      //    this.props.profileState(data);
      //    // console.log(response.data.totalCount);
      
      // });
      this.props.getProfile(userID); // thunk из profile-reducer, получаем данные пользователя
      this.props.getStatus(userID); // thunk из profile-reducer, получаем статус пользователя
      
   }
   render(){
       
      return(
         <Profile {...this.props} profile={this.props.profile} 
                  status={this.props.status} updateStatus={this.props.updateStatus}/>
      );
   }
}



let mapStateToProps = (state) => ({
   profile:state.profilePage.profile,
   status:state.profilePage.status,
});

export default compose(
   connect(mapStateToProps, {getProfile, updateStatus, getStatus}),
   withRouter,
   // withAuthRedirect
)(ProfileContainer);
