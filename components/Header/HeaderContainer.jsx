import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { logout } from '../../redux/auth-reducer';
import { compose } from 'redux';
// import { withAuthRedirect } from '../../redux/hoc/withAuthRedirect';
class HeaderContainer extends React.Component {
  


  render(){
    
    return (
      <Header {...this.props}/>
      );
    }
  }
  
  
  let mapStateToProps = (state) => ({
    auth: state.auth.isLogin,
    login: state.auth.login
  });

  export default compose( 
    connect(mapStateToProps, { logout }),
    // withAuthRedirect
    ) (HeaderContainer);