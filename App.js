import { Route } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer.jsx';
import Login from './components/Login/Login';
import MessagesContainer from './components/Messages/MessagesContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
const App = (props) => {
   //debugger;
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

/*<!-- ":" - параметр "?" - не обезательный -->*/ 

export default App;
