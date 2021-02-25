import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import Preloader from './components/common/Preloader/Preloader';
import HeaderContainer from './components/Header/HeaderContainer.jsx';
import Login from './components/Login/Login';
import MessagesContainer from './components/Messages/MessagesContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import { intializedApp } from './redux/app-reducer';
class App  extends React.Component  {
   //debugger;

  componentDidMount(){
    this.props.intializedApp();  
  }

  render(){
    if(!this.props.initialized){
      return <Preloader />
    }
    return (
      <div className="App">
        <HeaderContainer />
        <div className="container" >
          <Navbar />
          <Route path={`/profile/:userID?`} 
          render={ () => <ProfileContainer /> } /> 
          <Route path='/dialogs' render={ () => <MessagesContainer />} />
          <Route path='/users' render={ () => <UsersContainer /> } />
          <Route path='/login' render={ () => <Login /> } />
        </div>
      </div>
    );
  }
}

/*<!-- ":" - параметр "?" - не обезательный -->*/ 

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});
export default compose( withRouter,
  connect( mapStateToProps , {intializedApp}))(App);
