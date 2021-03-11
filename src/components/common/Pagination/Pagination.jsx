import React, {useState, useEffect} from 'react';
import s from './Pagination.module.css';


const Pagination = (props) => {
   let pageCount =  Math.ceil(props.totalCount/props.count); //Кількість сторінок
   let arrPage = []; // масив сторінок
   
   let positionSize = 10;
   let positionCount = Math.ceil(pageCount / positionSize); //Кількість позицій з сторінками
   const [position, setposition] = useState(1);
   let leftPosition = (position - 1) * positionSize + 1;
   let rightPosition = position * positionSize;

   const nextPosition = () => {
      setposition(position+1);  // меняем локальний стейт
   }
   const prevPosition = () => {
      setposition(position-1);  // меняем локальний стейт
   }
   

   useEffect(() => { //Возвращаем после отрисовки страницы
      setposition(position);
   }, [position]);


   for(let i = 1; i <= pageCount; i++){ //додаємо сторінки в масив
      arrPage.push(i);
   }
   return (
      <div className={s.pagination}>
      {position > 1 && 
      <button onClick={ prevPosition }>Prev</button>}

      { arrPage.filter(p => p >= leftPosition && p <= rightPosition).map( p => {
         return <span key={p} id={p} onClick={  ()=>{ props.currentPageF(p); }}
         className={props.currentPageProps === p ? s.active : ''} >{p}</span>
      })}
   
      {positionCount > position && 
      <button onClick={ nextPosition }>Next</button>}
   </div>
   )
}

export default Pagination;