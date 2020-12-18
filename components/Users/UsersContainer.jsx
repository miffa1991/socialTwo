import React from 'react';
import { connect } from 'react-redux';
import { followAC, setCurrentPageAC, setPageCountAC, setUsersAC, unfollowAC } from '../../redux/users-reducer';
import Users from './Users';
import * as axios from 'axios';


class UsersContainer extends React.Component {
   
   componentDidMount(){
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${this.props.currentPage}`) //відправляємо запрос на сервер
      .then(response => { //відповідь з сервера
         this.props.setUsers(response.data.items);
         this.props.setPageCount(response.data.totalCount);
         // console.log(response.data.totalCount);
      });
   }

   currentPage = (count) => {
      // console.log(p);
      // debugger;
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${count}`) //відправляємо запрос на сервер
      .then(response => { //відповідь з сервера
         this.props.setUsers(response.data.items);
         this.props.setPageCount(response.data.totalCount);
      });
      this.props.setCurrentPage(count);
   }
   
   // currentPage
   render() {
      debugger;
      return <>
         <Users users={this.props.users}
                 count= {this.props.count} 
                 totalCount = {this.props.totalCount}
               currentPage={this.currentPage}
               currentPageProps = {this.props.currentPage}
               />
      </>
   }
}

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

export default connect(stateToProps, dispatchToProps)(UsersContainer);;
