import React from 'react';
import s from './Users.module.css';
import avatar from '../../assets/img/avatar.jpg';
import { NavLink } from 'react-router-dom';
import Pagination from '../common/Pagination/Pagination';



const Users = (props) =>{
   // debugger;

   return(
       <div className={s.users}>
       
      { props.users.map( u => (
         
      <div className={s.userItem} key={u.id}>
         <div className={s.col1}>
            <div className={s.foto}>
               <NavLink to={'/profile/' + u.id} >
                  <img src={u.photos.small === null ? avatar : u.photos.small } alt=""/>
               </NavLink>
               { u.followed 
               ? 
               <button disabled={props.disable.some(id => id === u.id)} 
               onClick={ ()=>{
                  props.unfollow(u.id); //відправляємо запрос на сервер
                  } }>unfollow</button> 
               : 
               <button  disabled={props.disable.some(id => id === u.id)} onClick={ ()=>{
                  props.follow(u.id); //відправляємо запрос на сервер
                  } }>follow</button> }
            </div>
         </div>
         { <div className={s.col2}>
            <div className="row">
               <div className="name">{u.name}</div>
               <div className="country">Ukraine</div>
            </div>
            <div className="row">
               <div className="status">{u.status}</div>
               <div className="city">Vinnytca</div>
            </div>
         </div> }
   </div>
   )) }
<Pagination totalCount = {props.totalCount} 
            currentPageProps={props.currentPageProps} 
            count = {props.count} 
            currentPageF = {props.currentPageF} />
      </div>
   )
}

export default Users; 