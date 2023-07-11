import { createSlice } from '@reduxjs/toolkit';


const bookingSlice = createSlice({
    name: "booking",
    initialState:{
        booking:{
            currentMovie:null,
            isFetching: false,
            error:false
        },
   
        deletebooking:{
            isFetching: false,
            error:false,
            success: false
        },
    },
    reducers:{
        bookingStart: (state) =>{
            state.booking.isFetching = true;
        },
        bookingSuccess: (state,action) => {
            state.booking.isFetching = false;
            state.booking.currentMovie = action.payload;
            state.booking.error = false;
        },
        bookingFailed: (state) =>{
            state.booking.isFetching = false;
            state.booking.error = true;
        },
       
       
        deleteBookingStart: (state) => {
            // state.deleteBooking.isFetching= true;

        },
        deleteBookingSuccess: (state) => {
            // state.deleteBooking.isFetching = false;
            state.booking.currentMovie = null;
            state.deletebooking.error = false;
        },
        deleteBookingFailed: (state) =>{
            // state.deleteBooking.isFetching = false;
            // state.deleteBooking.error = true;
            state.booking.currentMovie = null;
        },
     
     
    }
});

export const {
    bookingStart,
    bookingFailed,
    bookingSuccess,

    deleteBookingStart,
    deleteBookingSuccess,
    deleteBookingFailed
} = bookingSlice.actions;

export default bookingSlice.reducer;

