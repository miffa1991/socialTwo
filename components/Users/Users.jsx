import React from 'react';
import s from './Users.module.css';

const Users = (props) => {
   debugger;
   return (
      <div class={s.users}>
         <div className={s.userItem}>
            <div className={s.col1}>
               <div className="foto">
                  <img src="$" alt=""/>
                  {props.follow}
                  <button>follow</button>
               </div>
            </div>
            <div className={s.col2}>
               <div className="row">
                  <div className="name">Vadym</div>
                  <div className="country">Ukraine</div>
               </div>
               <div className="row">
                  <div className="status">nice</div>
                  <div className="city">Vinnytca</div>
               </div>
            </div>
         </div>
         <div className={s.userItem}>
            <div className={s.col1}>
               <div className="foto">
                  <img src="$" alt=""/>
                  <button>follow</button>
               </div>
            </div>
            <div className={s.col2}>
               <div className="row">
                  <div className="name">Vadym</div>
                  <div className="country">Ukraine</div>
               </div>
               <div className="row">
                  <div className="status">nice</div>
                  <div className="city">Vinnytca</div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Users; 