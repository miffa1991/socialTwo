import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { getAuth } from '../../redux/auth-reducer';
import { compose } from 'redux';
import { withAuthRedirect } from '../../redux/hoc/withAuthRedirect';
class HeaderContainer extends React.Component {
  
  componentDidMount(){
    this.props.getAuth();
    
  }

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
    connect(mapStateToProps, { getAuth }),
    // withAuthRedirect
    ) (HeaderContainer);