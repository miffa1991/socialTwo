import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuth } from '../../redux/auth-reducer';
import { authAPI } from '../../api/api';
class HeaderContainer extends React.Component {
  
  componentDidMount(){
    authAPI.getAuth() //відправляємо запрос на сервер, withCredentials передаем куки
    .then(data => { //відповідь з сервера
      if ( data.resultCode === 0) { //перевірка чи ми зареєстровані
      let {id, login, email} = data.data;
        this.props.setAuth(id, login, email);
      }
    });
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

  export default connect(mapStateToProps, { setAuth }) (HeaderContainer);