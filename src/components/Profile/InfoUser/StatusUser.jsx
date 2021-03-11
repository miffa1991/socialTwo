import React from 'react';

class StatusUser extends React.Component{
   state = { // локальний стейт
      editMode: false,
      status: this.props.status
   }

   activeMode = () =>{
      this.setState({editMode:true});  // меняем локальний стейт
   }

   deActiveMode = () =>{
      this.setState({editMode:false});  // меняем локальний стейт
      this.props.updateStatus(this.state.status);
   }
   onChangeStatus = (e) =>{
      
      this.setState({status:e.currentTarget.value});
   }
   componentDidUpdate(prevProps, prevState){
      if(prevProps.status !== this.props.status){
         this.setState({status:this.props.status});
      }
   }
   render(){
      
      return <div>
         {!this.state.editMode &&
         <div onDoubleClick={this.activeMode}>{this.state.status || '----'}</div>
         }
         {this.state.editMode &&
         <input onChange={this.onChangeStatus} onBlur={this.deActiveMode} autoFocus={true} value={this.state.status}/>
         }
         </div>
   }
}


export default StatusUser;