import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

let mapStateToProps = (state) => ({
  isauth:state.auth.isLogin
});
export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    // debugger;
    render() {
      debugger;
      if (!this.props.isauth) return <Redirect to={'/login'} />
      return <Component {...this.props} />
    }
  }
  let ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent)

  return ConnectedAuthRedirectComponent;
}