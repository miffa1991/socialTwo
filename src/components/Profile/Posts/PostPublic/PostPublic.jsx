import React from 'react';


const PostPublic = (props) =>{
   
   return(
      <div className="postItem" key={props.id}>
            {props.postSend}
      </div>
   );
}

export default PostPublic;