import profileReducer, { addNewPostActionCreator } from "./profile-reducer"


let initialState = {
   postWall: [
      {id:1, message:'Hi. I am good. Thx', likeCount:22},
      {id:2, message:'Go Go Go', likeCount:22},
      {id:3, message:'Go Go Go', likeCount:23}
   ]
};
let action = addNewPostActionCreator('IT-Kamasutra');

it ('length of posts profile-page', () => {
  
   let newState = profileReducer(initialState, action);

   expect(newState.postWall.length).toBe(4);
   
}) 

it ('name of posts profile-page', () => {
  
   let newState = profileReducer(initialState, action);

   expect(newState.postWall[3].message).toBe('IT-Kamasutra');
   
}) 