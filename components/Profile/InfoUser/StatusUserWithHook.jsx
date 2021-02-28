import React, {useState, useEffect} from 'react';

const StatusUserWithHook = (props) => {
   const [state, setstate] = useState(false);
   const [status, setstatus] = useState(props.status);

   useEffect(() => { //Возвращаем после отрисовки страницы
      setstatus(props.status);
   }, [props.status]); // Выполняем каждый раз когда стату изменился. Если указать [] то будет выполнятся только один раз

   const activeMode = () => {
      setstate(true);  // меняем локальний стейт
   }
   const deActiveMode = () => {
      setstate(false);  // меняем локальний стейт
      props.updateStatus(status);
   }
   const onChangeStatus = (e) =>{
      
      setstatus(e.currentTarget.value);
   }

      return <div>
         {!state &&
         <div onDoubleClick={activeMode}>{status || '----'}</div>
         }
         {state &&
            <input onChange={onChangeStatus} onBlur={deActiveMode} autoFocus={true} value={status}/>
         }
         </div>
   
}


export default StatusUserWithHook;