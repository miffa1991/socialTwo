import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC } from '../../redux/users-reducer';
import Users from './Users';



let stateToProps = (state) => {
   // debugger;
   return {
         follow: state.userPage.users.follow
   }
}

let dispatchToProps = (dispatch) => {
   return{
      follow:() =>{
         dispatch(followAC());
      },
      unfollowAC:() =>{
         dispatch(unfollowAC());
      },
      setUsers:() =>{
         dispatch(setUsersAC());
      }
   }
}

const UsersContainer = connect(stateToProps, dispatchToProps)(Users);
export default UsersContainer;
