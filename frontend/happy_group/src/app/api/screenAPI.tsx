import { apiV1, apiV1_user, get, post, put, patch, delele, getWithData} from "./generic";

const screenAPI = {
  
  getScreenByID: function (screenID: string) {
    const url =`${apiV1}/screens/${screenID}`;
    return get(url, "")
  },
  getScreenByInfo: function (scheduleID: string, time: string) {
    const url =`${apiV1}/screens`;
    return getWithData(url,"", { scheduleId: scheduleID, time: time})
  },
  setBookedSeat: function (screenID: string, data:any, token: string){
    const url = `${apiV1}/screens/booked-seat/${screenID}`;
    return post (url, data, token)
  },
  createScreen: function (scheduleId: string, time: string){
    const url = `${apiV1}/screens/`;
    return post (url, {scheduleId:scheduleId, time: time}, "")
  },
  // reservation
  createReservation: function (userId: string, data: any, token: string){
    const url=`${apiV1}/reservations/`
    return post (url, data, token)
  },
  bookReservation: function (reserID:string, token:string){
    const url =`${apiV1}/reservations/${reserID}/book`;
    return post(url, {}, token)
  },
  getScreenByShowtime: function (token: string, showtimeID: string, theatre: string, date: string, timeSlot: string) {
    const url =`${apiV1}/screens/?showtimeId=${showtimeID}&theatre=${theatre}&date=${date}&timeSlot=${timeSlot}`;
    return get(url,token)
  },
  deleteBookedSeat: function(token: string, seatid: string){
    const url=`${apiV1}/screens/booked-seat/${seatid}`
    return delele(url, token)
  }
};

export default screenAPI;
