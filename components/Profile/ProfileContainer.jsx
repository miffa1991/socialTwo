import React from 'react';
import { connect } from 'react-redux';
import Profile from "./Profile";
import { profileState } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { profileAPI } from '../../api/api';

class ProfileContainer extends React.Component{

   
   componentDidMount(){
      let userID = this.props.match.params.userID;
      if(!userID){
         userID = 2;
      }
      // debugger;
      profileAPI.getProfile(userID) //відправляємо запрос на сервер
      .then(data => { //відповідь з сервера
         this.props.profileState(data);
         // console.log(response.data.totalCount);
      
      });
      
   }
   render(){
      //  debugger;
      return(
         <Profile {...this.props} profile={this.props.profile}/>
      );
   }
}



let mapStateToProps = (state) => ({
   profile:state.profilePage.profile
});
let WithRouterProfileContainer = withRouter(ProfileContainer);
export default connect(mapStateToProps, {
   profileState
})(WithRouterProfileContainer);
