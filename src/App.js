import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import Preloader from './components/common/Preloader/Preloader';
import HeaderContainer from './components/Header/HeaderContainer.jsx';
import Navbar from './components/Navbar/Navbar';
import { intializedApp } from './redux/app-reducer';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';
import { Provider } from 'react-redux';

 // React.lazy загружаэмо компоненту тільки коли вона потрібна
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));
const MessagesContainer = React.lazy(() => import('./components/Messages/MessagesContainer'));
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
           {/* // React.Suspense потрібний для роботи React.lazy */}
          <React.Suspense fallback={<Preloader />}>
            <Switch>
                <Route path={`/profile/:userID?`} 
                render={ () => <ProfileContainer /> } /> 
                <Route path='/dialogs' render={ () => <MessagesContainer />} />
                <Route path='/users' render={ () => <UsersContainer /> } />
                <Route path='/login' render={ () => <Login /> } />
            </Switch>
          </React.Suspense>
        </div>
      </div>
    );
  }
}

/*<!-- ":" - параметр "?" - не обезательный -->*/ 

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});
const Appcontainer = compose( withRouter,
  connect( mapStateToProps , {intializedApp}))(App);



  const AppFacebook = (props) => {
    return <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store} >
        <Appcontainer />
    </Provider>
  </BrowserRouter>
  }

  export default AppFacebook;