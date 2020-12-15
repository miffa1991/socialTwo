import * as axios from 'axios';
import React from 'react';
import s from './Users.module.css';
import avatar from '../../assets/img/avatar.jpg';

class Users extends React.Component {
   constructor(props){
      super(props);
      axios.get('https://social-network.samuraijs.com/api/1.0/users') //відправляємо запрос на сервер
      .then(response => { //відповідь з сервера
         props.setUsers(response.data.items);
      });
   }
   
   render() {
      return <div class={s.users}>
      { this.props.users.map( u => (
      <div className={s.userItem} key={u.id}>
      <div className={s.col1}>
         <div className="foto">
            {u.photos.small == null ?  
            <img src={avatar} alt=""/> :
            <img src={u.photos.small} alt=""/>
            }
            { u.followed ? 
            <button onclick={ ()=>{u.unfollow(u.id)} }>unfollow</button> : 
            <button onclick={ ()=>{u.follow(u.id)} }>follow</button> }
         </div>
      </div>
      <div className={s.col2}>
         <div className="row">
            <div className="name">{u.name}</div>
            <div className="country">Ukraine</div>
         </div>
         <div className="row">
            <div className="status">{u.status}</div>
            <div className="city">Vinnytca</div>
         </div>
      </div>
   </div>
   )) }
   
      </div>
   }
}

export default Users; 