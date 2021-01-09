import React from 'react';
import { connect } from 'react-redux';
import { follow,
   unfollow,
   setUsers,
   setCurrentPage,
   setPageCount,
   isFetching} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';


class UsersContainer extends React.Component {
   
   componentDidMount(){
      this.props.isFetching(true);
      usersAPI.setUsers(this.props.count,this.props.currentPage ) //відправляємо запрос на сервер
      .then(data => { //відповідь з сервера
         this.props.isFetching(false);
         this.props.setUsers(data.items);
         this.props.setPageCount(data.totalCount);
         // console.log(response.data.totalCount);
        
      });
      
   }

   currentPage = (current) => {
      // console.log(p);
      // debugger;
      this.props.isFetching(true);
      usersAPI.setUsers(this.props.count, current ) //відправляємо запрос на сервер
      .then(data => { //відповідь з сервера
         this.props.isFetching(false);
         this.props.setUsers(data.items);
         this.props.setPageCount(data.totalCount);
         
      });
      this.props.setCurrentPage(current);
   }
   
   // currentPage
   render() {
      // debugger;
      return <>
         {this.props.fetching == true ? <Preloader /> :    
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
         users: state.userPage.users,
         count: state.userPage.count, 
         currentPage:state.userPage.currentPage,
         totalCount:state.userPage.totalCount,
         fetching:state.userPage.fetching
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

export default connect(stateToProps, 
   {follow,
   unfollow,
   setUsers,
   setCurrentPage,
   setPageCount,
   isFetching
   })(UsersContainer);
