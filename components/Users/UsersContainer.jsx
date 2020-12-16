import { connect } from 'react-redux';
import { followAC, setCurrentPageAC, setPageCountAC, setUsersAC, unfollowAC } from '../../redux/users-reducer';
import Users from './Users';



let stateToProps = (state) => {
   //  debugger;
   return {
         users: state.userPage.users,
         count: state.userPage.count, 
         currentPage:state.userPage.currentPage,
         totalCount:state.userPage.totalCount
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
      },
      setCurrentPage:(count) =>{
         dispatch(setCurrentPageAC(count));
      },
      setPageCount:(totalUsers) =>{
         dispatch(setPageCountAC(totalUsers));
      }
      
   }
}

const UsersContainer = connect(stateToProps, dispatchToProps)(Users);
export default UsersContainer;
