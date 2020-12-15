import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC } from '../../redux/users-reducer';
import Users from './Users';



let stateToProps = (state) => {
   // debugger;
   return {
         users: state.userPage.users
   }
}

let dispatchToProps = (dispatch) => {
   return{
      follow:(userId) =>{
         dispatch(followAC(userId));
      },
      unfollow:(userId) =>{
         dispatch(unfollowAC(userId));
      },
      setUsers:(users) =>{
         dispatch(setUsersAC(users));
      }
   }
}

const UsersContainer = connect(stateToProps, dispatchToProps)(Users);
export default UsersContainer;
