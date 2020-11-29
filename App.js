import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx';
import Messages from './components/Messages/Messages';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
const App = (props) => {
  // debugger;
  return (
    
    <div className="App">
      <Header />
      <div className="container" >
        <Navbar />
        <Route path='/profile' render={ () => <Profile  state={props.state.profilePage}
                                                        dispatch={props.dispatch}
                                                        /> } />
        <Route path='/dialogs' render={ () => <Messages state={props.state.messagePage} />} />
      </div>
    </div>
  );
}



export default App;
