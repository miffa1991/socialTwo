import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx';
import MessagesContainer from './components/Messages/MessagesContainer';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
const App = (props) => {
   //debugger;
  return (
    <div className="App">
      <Header />
      <div className="container" >
        <Navbar />
        <Route path='/profile' render={ () => <Profile /> } />
        <Route path='/dialogs' render={ () => <MessagesContainer />} />
      </div>
    </div>
  );
}



export default App;
