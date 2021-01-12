import React from 'react';
import s from './Users.module.css';
import avatar from '../../assets/img/avatar.jpg';
import { NavLink } from 'react-router-dom';
import { followAPI } from '../../api/api';



const Users = (props) =>{
   // debugger;
   let pageCount =  Math.ceil(props.totalCount/props.count);
   let arrPage = [];
   
   for(let i = 1; i <= pageCount; i++){
      arrPage.push(i);
   }

   return(
       <div className={s.users}>
       
      { props.users.map( u => (
         
      <div className={s.userItem} key={u.id}>
         <div className={s.col1}>
            <div className={s.foto}>
               <NavLink to={'/profile/' + u.id} >
                  <img src={u.photos.small === null ? avatar : u.photos.small } alt=""/>
               </NavLink>
               { u.followed ? 
               <button disabled={props.disable.some(id => id === u.id)} onClick={ ()=>{
                  props.unfollow(u.id); //відправляємо запрос на сервер
                  } }>unfollow</button> : 
               <button  disabled={props.disable.some(id => id === u.id)} onClick={ ()=>{
                  props.follow(u.id); //відправляємо запрос на сервер
                  
                  } }>follow</button> }
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
     <div className={s.pagination}>
            { arrPage.map( p => {
               return <span key={p} id={p} onClick={  ()=>{ props.currentPage(p); }}
               className={props.currentPageProps === p ? s.active : ''} >{p}</span>
            })}
         </div>
      </div>
   )
}

export default Users; 