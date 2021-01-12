import * as axios from "axios";

const instance = axios.create({
   baseURL: `https://social-network.samuraijs.com/api/1.0/`,
   withCredentials: true,
   headers:{ 
      'API-KEY':'d2f5b007-0ccf-4ac0-acee-b03a552a8ba4'}
});

export const userAPI = {
   setUsers(count = 10, currentPage = 1) {
      return instance.get(`users?count=${count}&page=${currentPage}`)
         .then(response => response.data);
      
   },
   getFollow(id) {
      return instance.post(`follow/${id}`)
      .then(response => response.data);
      
   },
   getUnFollow(id) {
      return instance.delete(`follow/${id}`)
      .then(response => response.data);
      
   }
}


export const authAPI = {
   getAuth() {
      return instance.get(`auth/me/`)
         .then(response => response.data);
      
   }
}


export const profileAPI = {
   getProfile(userID) {
      return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userID)
      .then(response => response.data);
   }
}

