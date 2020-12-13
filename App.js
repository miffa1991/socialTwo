import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx';
import MessagesContainer from './components/Messages/MessagesContainer';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import UsersContainer from './components/Users/UsersContainer';
const App = (props) => {
   //debugger;
  return (
    <div className="App">
      <Header />
      <div className="container" >
        <Navbar />
        <Route path='/profile' render={ () => <Profile /> } />
        <Route path='/dialogs' render={ () => <MessagesContainer />} />
        <Route path='/users' render={ () => <UsersContainer /> } />
      </div>
    </div>
  );
}



export default App;
