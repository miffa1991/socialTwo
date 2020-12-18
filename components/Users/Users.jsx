import React from 'react';
import s from './Users.module.css';
import avatar from '../../assets/img/avatar.jpg';



const Users = (props) =>{
   debugger;
   let pageCount =  Math.ceil(props.totalCount/props.count);
   let arrPage = [];
   
   for(let i = 1; i <= pageCount; i++){
      arrPage.push(i);
   }
   
   return(
       <div className={s.users}>
         <div className={s.pagination}>
            { arrPage.map( p => {
               return <span key={p} id={p} onClick={  ()=>{ props.currentPage(p); }}
               className={props.currentPageProps == p ? s.active : ''} >{p}</span>
            })}
         </div>
      { props.users.map( u => (
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
   )
}

export default Users; 