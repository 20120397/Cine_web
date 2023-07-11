"use client"
import { reservationInterface } from '@/app/api/apiResponse'
import UserAPI from '@/app/api/userAPI'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styles from './page.module.css'

type Props = {
    params: { reservation: string };
    searchParams: { [key: string]: string | string[] | undefined };
  };
export default function User ({params, searchParams}:Props){
    const reservationID = params.reservation
    console.log("re", reservationID)
    const [reservation, setReservation]= useState<reservationInterface>()
    const token = useSelector((state:any)=> state.auth.login.currentUser.token)
    const fetchReservation = async()=>{
        const res = await UserAPI.getReservation(token,reservationID)
        setReservation(res.data)
    }
    useEffect(()=>{
        fetchReservation();
    },[])
    return(
        <div className={styles.body}>

            <div className={styles.Box2}>
                <div className={styles.hbox}>
                <div className={styles.his}>
                        Reservation ID: ###{reservationID}
                </div>
                    <table className={styles.hisTable}>
                        <tr>
                            <th>STT</th>
                            <th>Tên phim</th>
                            <th>Tên rạp</th>
                            <th>Ngày xem</th>
                            <th>Suất chiếu</th>
                            <th>Giá vé</th>
                            <th>Số ghế</th>
                        
                        
                        </tr>
                        {reservation?.tickets.map((ticket:any,index)=>
                         <tr key={index}>
                         <td>{index +1}</td>
                         <td>{ticket.movieTitle}</td>

                         <td>{ticket.theatre}</td>
                         <td>{ticket.date.slice(0,10)}</td>
                         <td>{ticket.time}</td>
                         <td>{ticket.price}</td>
                         <td>{ticket.seatPosition}</td>
                     </tr>)}
                       
                       
                    </table>
                </div>
                
               
                <div className={styles.footer}>
                        <p>Ngày đặt: {reservation?.reservation.createdAt.slice(0,10)}</p>
                        <h4>Tổng tiền: {reservation?.reservation.totalPrice}</h4>
                </div>
            </div>




        </div>
    )
}



// export async function generateMetadata(
//     { params, searchParams }: Props,
//     parent?: ResolvingMetadata,
//   ): Promise<Metadata> {
//     // read route params
//     const id = params.reservation;
   
//     const res= await UserAPI.getReservation("",id)
//     const reservation=res.data  
//     return {
//     title: reservation.title
  
//     };
//   }
  
//   export async function generateStaticParams() {
//     const res= await UserAPI.getAllReservations("")
//     const reservations=res.data
//     return reservations.map((reservation:any) => ({
//       slug: reservation._id,
//     }));
//   }