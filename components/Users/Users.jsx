import * as axios from 'axios';
import React from 'react';
import s from './Users.module.css';
import avatar from '../../assets/img/avatar.jpg';

class Users extends React.Component {
   
   componentDidMount(){
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${this.props.currentPage}`) //відправляємо запрос на сервер
      .then(response => { //відповідь з сервера
         this.props.setUsers(response.data.items);
         this.props.setPageCount(response.data.totalCount);
         console.log(response.data.totalCount);
      });
   }

   currentPage = (count) => {
      // console.log(p);
      // debugger;
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${count}`) //відправляємо запрос на сервер
      .then(response => { //відповідь з сервера
         this.props.setUsers(response.data.items);
         this.props.setPageCount(response.data.totalCount);
      });
      this.props.setCurrentPage(count);
   }
   
   // currentPage
   render() {
       debugger;
      let pageCount =  Math.ceil(this.props.totalCount/this.props.count);
      let arrPage = [];
      
      for(let i = 1; i <= pageCount; i++){
         arrPage.push(i);
      }

      // console.log(arrPage);
      return <div className={s.users}>
         <div className={s.pagination}>
            { arrPage.map( p => {
               return <span key={p} id={p} onClick={  ()=>{ this.currentPage(p); }}
               className={this.props.currentPage == p ? s.active : ''} >{p}</span>
            })}
         </div>
      { this.props.users.map( u => (
      <div className={s.userItem} key={u.id}>
         <div className={s.col1}>
            <div className={s.foto}>
               <img src={u.photos.small == null ? avatar : u.photos.small } alt=""/>
               { u.followed ? 
               <button onClick={ ()=>{u.unfollow(u.id)} }>unfollow</button> : 
               <button onClick={ ()=>{u.follow(u.id)} }>follow</button> }
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