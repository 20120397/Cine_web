import { apiV1, apiV1_user, get, post, put, patch, delele} from "./generic";

const showtimeAPI = {
  

  getAllShowtimes: function () {
    const url =`${apiV1}/showtimes/`;
    return get(url,"");
  },
  getShowtime: function (id: string){
    const url =`${apiV1}/showtimes/id/${id}`;
    return get (url,"");
  },
  getSchebyShowtime: function (id: string){
    const url =`${apiV1}/schedules/showtime/${id}`;
    return get (url,"");
  },
  quickbuy: function (showtimeId: string, theatre: string, date:string){
    const url =`${apiV1}/schedules/search/?showtimeId=${showtimeId}&theatre=${theatre}&date=${date}`
    return get(url, "")
  },
  quickbuy1: function (showtimeId: string, theatre: string, date:string){
    const url =`${apiV1}/schedules/?showtimeId=${showtimeId}&date=${date}`
  // &theatre=${theatre}
    return get(url, "")
  },
  searchShowtimes: function(query: string){
    const url =`${apiV1}/showtimes/search?q=${query}`
    return get(url, "")
  },
  postSchedule: function(data:any){
    return post("http://localhost:8000/v1/schedules/", data, "")
  },
  postScheduleNew: function(data:any, token:string){
    return post("http://localhost:8000/v1/schedules/", data, token)
  }
 
 
};

export default showtimeAPI;
