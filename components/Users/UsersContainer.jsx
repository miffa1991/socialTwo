import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { follow,
   unfollow,
   getUsers,
   setCurrentPage,
   setPageCount,
   isFetching,
   isDisable} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { listUsers, 
   countUsers, 
   currentPageS, 
   totalCountS,
   fetchingS, 
   disableS } from '../../redux/users-selector';


class UsersContainer extends React.Component {
   
   componentDidMount(){
      this.props.getUsers(this.props.count, this.props.currentPage); 
   }

   currentPage = (current) => {
      // console.log(p);
      // debugger;
      this.props.setCurrentPage(current);
      this.props.getUsers(this.props.count, current);
   }
   
   // currentPage
   render() {
      // debugger;
      return <>
         {this.props.fetching === true ? <Preloader /> :    
         <Users {...this.props}  users={this.props.users}
                  count= {this.props.count} 
                  totalCount = {this.props.totalCount}
                  currentPage={this.currentPage}
                  currentPageProps = {this.props.currentPage}
               />
         }
      </>
   }
}

let stateToProps = (state) => {
   //  debugger;
   return {
         users: listUsers(state),
         count: countUsers(state), 
         currentPage: currentPageS(state),
         totalCount: totalCountS(state),
         fetching: fetchingS(state),
         disable: disableS(state)
   }
}

// let dispatchToProps = (dispatch) => {
//    return{
//       follow:(userId) =>{
//          dispatch(followAC(userId));
//       },
//       unfollow:(userId) =>{
//          dispatch(unfollowAC(userId));
//       },
//       setUsers:(users) =>{
//          dispatch(setUsersAC(users));
//       },
//       setCurrentPage:(count) =>{
//          dispatch(setCurrentPageAC(count));
//       },
//       setPageCount:(totalUsers) =>{
//          dispatch(setPageCountAC(totalUsers));
//       },

//       isFetching:(fetching) => {
//          dispatch(isFetchingAC(fetching));
//       }
//    }
// }

export default compose( connect(stateToProps, 
   {follow,
   unfollow,
   getUsers,
   setCurrentPage,
   setPageCount,
   isFetching,
   isDisable
   }))(UsersContainer);
