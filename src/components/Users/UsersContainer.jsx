import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { follow,
   unfollow,
   getUsers,
   setCurrentPage,
   setPageCount} from '../../redux/users-reducer';
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
      this.props.getUsers( this.props.currentPage, this.props.count); 
   }

   currentPage = (current) => {
      // console.log(p);
      // debugger;
      this.props.setCurrentPage(current);
      this.props.getUsers(current, this.props.count);
   }
   
   // currentPage
   render() {
      // debugger;
      return <>
         {this.props.fetching === true ? <Preloader /> :    
         <Users {...this.props}  users={this.props.users}
                  count= {this.props.count} 
                  totalCount = {this.props.totalCount}
                  currentPageF={this.currentPage}
                  currentPageProps = {this.props.currentPage}
                  follow = {this.props.follow}
                  unfollow = {this.props.unfollow}
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

export default compose( connect(stateToProps, 
   {follow,
   unfollow,
   getUsers,
   setCurrentPage,
   setPageCount
   }))(UsersContainer);
