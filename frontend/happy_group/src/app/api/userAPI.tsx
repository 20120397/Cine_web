import { apiV1, apiV1_user, get, post, put, patch, delele} from "./generic";

const UserAPI = {
  
  getNewU: function () {
    const url = `${apiV1}/`;
    return get(url, "");
  },
  login: function(user: any){
    const url= `${apiV1_user}/users/login`
    return post(url, user,"");
  },
  logout: function(user:any, token:any){
    const url= `${apiV1_user}/users/logout`;
    return post(url, user, token);
  },
  register: function (user:any){
    const url=  `${apiV1_user}/users/register`
    return post(url, user,"")
  },
  getAllReservations: function(token: string){
    const url =`${apiV1}/reservations/`
    return get(url,token)
  },
  getReservation: function (token: string, reserId: string){
    const url =`${apiV1}/reservations/${reserId}/tickets`
    return get(url,token)
  }
};

export default UserAPI;
