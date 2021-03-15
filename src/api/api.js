import * as axios from "axios";

const instance = axios.create({
   baseURL: `https://social-network.samuraijs.com/api/1.0/`,
   withCredentials: true,
   headers:{ 
      'API-KEY':'d2f5b007-0ccf-4ac0-acee-b03a552a8ba4'}
   });
   
   export const userAPI = {
      setUsers( currentPage = 1, count = 10) {
         return instance.get(`users?page=${currentPage}&count=${count}`)
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
      
      me() {
         return instance.get(`auth/me/`);
         
      },
      login(email, password, rememberMe, captcha = null) {
         return instance.post(`auth/login/`, {email, password, rememberMe, captcha});
         
      },
      logout() {
         return instance.delete(`auth/login`);
         
      }
   }

   export const securityAPI = {
      
      captcha() {
         return instance.get(`security/get-captcha-url`);
         
      },
   }
   
   
   export const profileAPI = {
      getProfile(userID) {
         return instance.get(`/profile/`+userID);
      },
      getStatus(userID) {
         return instance.get(`/profile/status/`+userID);
      },
      updateStatus(status) {
         return instance.put(`/profile/status/`,{status});
      },
      saveAvatar(imageFile) {
         const formData = new FormData();
         formData.append('image', imageFile);
         return instance.put(`/profile/photo/`,formData, {
            headers: {
               'Content-Type': 'multipart/form-data'
            }
         }
         );
      },
      editProfile(profile) {
         debugger
         return instance.put(`/profile/`, profile);
      }
   }
   
