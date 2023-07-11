"use client"
import styles from './Banner.module.css'
import {pic1,pic2,pic3,pic4} from '@/assets/imgs'
import { right_arrow,left_arrow } from '@/assets/svgs'
import Image from 'next/image'
import { HtmlHTMLAttributes, useEffect, useState } from 'react';//
import BannerAPI from '@/app/api/BannerAPI';
import { getUsersData } from '@/app/state/actions/userActions';//
import { useSelector, useDispatch } from 'react-redux'//
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import movieAPI from '@/app/api/movieAPI'
import showtimeAPI from '@/app/api/showtimeAPI'
import { bookingMovie } from '@/redux/apiRequests'



export default function Banner () {

    let indexValue = 1;  

    showImg(indexValue); 

    // setInterval(() => {
    //     side_slide(+1);
    //   }, 5000);

    function btn_dot(e: number){
      showImg(indexValue = e);
    }
  
    function side_slide(e: number){
      showImg(indexValue += e);
    }
  
    function showImg(e: number){
        let i;      
         const img = document.querySelectorAll<HTMLImageElement>('#pic img');
        const sliders = document.querySelectorAll<HTMLSpanElement>('#dot span');
        if (e > img.length){indexValue=1}
        if (e < 1 ){indexValue=img.length}

      
        for(i=0;i<img.length;i++){
                img[i].style.display="none";
                // img[i].style.opacity = "0";

        }
        for(i=0;i<sliders.length;i++){
            sliders[i].style.background="#C0EEF2";

          }

            if (img[indexValue - 1]) {
                img[indexValue - 1].style.display = "block";
                // img[indexValue - 1].style.opacity = '1';
              }

              if (sliders[indexValue - 1]) {
                sliders[indexValue - 1].style.background = "#537fe7";
              }
      }


      const [selectedShowtimeId, setSelectedShowtimeId] = useState("");
      const [selectedDate, setSelectedDate] = useState("");
      const [selectedTheatreId, setSelectedTheatreId] = useState("");
      const [selectedTime, setSelectedTime] = useState("");
      

      const handleMovieChange = (event: { target: { value: any } }) => {
        const selectedId = event.target.value;
        setSelectedShowtimeId(selectedId);
        fetchtheatre(selectedId)
      };


      const handleDateChange = (event: { target: { value: any } }) => {
        const selectedDate = event.target.value;
        setSelectedDate(selectedDate)
        qTikcet1(selectedShowtimeId, selectedTheatreId, selectedDate);
      };

      const handleTheatreChange = (event: { target: { value: any } }) => {
        const selectedTheatreId = event.target.value;
        setSelectedTheatreId(selectedTheatreId);
        qTikcet2(selectedShowtimeId,selectedTheatreId);
      };

      
      const handleTimeChange = (event: { target: { value: any } }) => {
        const selectedTime = event.target.value;
        setSelectedTime(selectedTime);
      };

      


    


    const [slides, setslides] = useState<any[]>([]); ///
    const slide = async () => {
      const SlideData = await BannerAPI.getAllSlides();
      // console.log("res: ", SlideData);
      setslides(SlideData.data);
      }
    const [movies, pickMovies] = useState<any[]>([]); ///
    const movie = async () => {
    const MovieData = await movieAPI.getNowShowingMovies();
        // console.log("res: ", MovieData);
        pickMovies(MovieData.data);
    }


    const [theatres, setTheatres] = useState<string[]>([])
    const fetchtheatre = async (id: string) => {
    const MovieData = await showtimeAPI.quickbuy(id, "","");
        // console.log("res: ", MovieData);
        setTheatres(MovieData.data);
    }

    const [times, setTimes]=useState<string[]>([])
    const [qtickets1, quickTickets1] = useState<any[]>([]);
    const qTikcet1 = async (id: string, theatre: string, date: string) => {
      const TicketData1 = await showtimeAPI.quickbuy(id, theatre,date);
      // console.log("res: ", TicketData1);
      setTimes(TicketData1.data)

}

function isButtonDisabled() {
  if (document.getElementsByName('showtimeId')[0] && 
  document.getElementsByName('date')[0] &&
  document.getElementsByName('theatreName')[0] &&
  document.getElementsByName('time')[0] 
  ){
    const movieId = (document.getElementsByName('showtimeId')[0] as HTMLInputElement).value;
    const date = (document.getElementsByName('date')[0] as HTMLInputElement).value;
    const theatreId = (document.getElementsByName('theatreName')[0] as HTMLInputElement).value;
    const time =   (document.getElementsByName('time')[0] as HTMLInputElement).value;
    if (!movieId || !date || !theatreId || !time) {
      return true; // Vô hiệu hóa nút "Mua vé"
    }
  
    return false; 
  }
  return false; 
 


  // Kiểm tra nếu một trong các select không được chọn
// Kích hoạt nút "Mua vé"
}



    const [qtickets2, quickTickets2] = useState<any[]>([]); ///
    const qTikcet2 = async (id: string,theatre: string) => {
      const TicketData2 = await showtimeAPI.quickbuy(id,theatre, "");
      // console.log("res: ", TicketData2);
      quickTickets2(TicketData2.data);
    }


      useEffect(()=>{
        slide();
        movie();
        // qTikcet("showtimeId");
    },[])
     const dispatch =useDispatch
     const router =useRouter()
    const handleBuyBtn= ()=>{
      // const newBooking ={
      //   showtimeId: selectedShowtimeId,
      //   date: selectedDate,
      //   theatreName: selectedTheatreId,
      //   time: selectedTime
      // }
      // bookingMovie(newBooking, dispatch, router)
    }


    return (
      


        <div className={styles.Banner}>
        
        {/* slides begin */}
            <div className={styles.slides} id={'pic'}>
            {/* <!--image begin */}
                {slides.map((slide, index) => (
                    <div className={styles.slide} key={index}>
                        <img src={slide} alt={''} />
                    
                    </div>
                    ))}
                
            </div>

        {/* slides end*/}
            <div onClick={() => side_slide(1)} className={styles.change_btn} id={styles.left}>
                <Image className={styles.left_btn} src={left_arrow} alt='' />
            </div>

            <div onClick={() => side_slide(-1)} className={styles.change_btn} id={styles.right}>
                <Image className={styles.right_btn} src={right_arrow} alt='' />
            </div>


            <div className={styles.btn_dots} id={'dot'}>
                {slides.map((slide, index) => (<span key={index} onClick={() => btn_dot(index + 1)}></span>))}
            </div>




        {/* Form begin */}
            <div className={styles.opt}>
                <label>MUA VÉ NHANH</label>
                <form action="./screen">
                    <select name="showtimeId" onChange={handleMovieChange}>
                        <option value="" hidden>Chọn phim</option> 
                        {movies.map((mvName, index) => (<option key={index} value={mvName.showtimeId}>{mvName.movieTitle}</option>))} 
                    </select>   

                    <select name="theatreName" onChange={handleTheatreChange} > 
                        <option value="" hidden>Chọn rạp</option> 
                        {theatres.map((theatres, index) => (<option key={index} value={theatres}>{theatres}</option>))}
                    </select> 

                     <select name="date" onChange={handleDateChange} >
                        <option value="" hidden>Chọn ngày</option> 
                        {qtickets2.map((dates, index) => (<option key={index} value={dates.slice(0,10)}>{dates.slice(0,10)}</option>))}
                    </select>
        
                   
                    <select name="time"  onChange={handleTimeChange}> 
                        <option value="" hidden>Chọn suất chiếu</option> 
                        {times.map((times, index) => (<option key={index} value={times}>{times}</option>))}
                    </select> 
                    {/* <button type="submit" className={styles.buy_btn}>Mua vé</button> */}
                    <button type="submit" className={styles.buy_btn} onClick={()=>handleBuyBtn()} disabled={isButtonDisabled()}>Mua vé</button>
                </form>

            </div>



        {/* Form end */}
        </div>
    )
}