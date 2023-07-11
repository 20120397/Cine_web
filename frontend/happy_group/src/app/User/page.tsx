"use client"
import movieAPI from "@/app/api/movieAPI"
import { movie_img } from '@/assets/imgs'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import styles from './User.module.css'

export default function User (){

  const user = useSelector((state: any) => state.auth.login.currentUser);
  console.log(user); // Kiểm tra thông tin người dùng trong console log


  const [movies, pickMovies] = useState<any[]>([]);

  const reser = async () => {
    const Reservation = await movieAPI.getIdTest(user?.token, user?.user?._id);//user?.user?._id
    console.log("res: ", Reservation);
    pickMovies(Reservation.data.tickets); // Update movies state with the tickets array
  };

    // const reser = async () => {
    // const Reservation = await movieAPI.getAllTicketsByReservation(`${user?.user?._id}`);
    // const Reservation = await movieAPI.getIdTest();
    // console.log("res: ", Reservation);
    // pickMovies(Reservation.data);

    // }
    
    useEffect(()=>{
        reser();
    },[])

    return(
        <div className={styles.body}>
            <div className={styles.Box1}>
                <div className={styles.ibox}>


                    <div className={styles.name}> {user?.user?.name}</div>

                    <div className={styles.infoList}>
                        <div className={styles.row}>
                            <div>
                            <span className={styles.label}>Số điện thoại:</span>
                            </div>
                            <div>
                            <span>{user?.user?.phone}</span>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div>
                            <span className={styles.label}>Email:</span>
                            </div>
                            <div>
                            <span>{user?.user?.email}</span>
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div>
                            <span className={styles.label}>Vai trò:</span>
                            </div>
                            <div>
                            <span>{user?.user?.role}</span>
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div>
                            <span className={styles.label}>User Name:</span>
                            </div>
                            <div>
                            <span>{user?.user?.username}</span>
                            </div>
                        </div>
                        </div>
                </div>
                <Image className={styles.pic} src={movie_img} alt='er'></Image>
            </div>

            {user?.user?.role === "user" && <div className={styles.body}>
                
                    <div className={styles.Box2}>
                    <div className={styles.hbox}>

                    {
                    movies.length > 0 ? (
                        movies.map((movie, index) => (
                        <div key={index}>
                            <table className={styles.hisTable}>
                            <tr>
                                <th>Tên phim</th>
                                <th>Tên rạp</th>
                                <th>Ngày xem</th>
                                <th>Giờ chiếu</th>
                                <th>Ghế ngồi</th>
                                <th>Chi Tiết</th>
                            </tr>
                            <tr>
                            <td>{movie.movieTitle}</td> 
                            <td>{movie.theatre}</td> 
                            <td>{movie.date}</td> 
                            <td>{movie.time}</td>
                            <td>{movie.seatPosition}</td> 
                            <td><a href="fb.com">Chi tiết</a></td> 
                            </tr>
                            </table>
                        </div>
                        ))
                    ) : (
                        <div>No movies found</div>
                    )
                    }
                
                    </div>

                    <div className={styles.his}>
                            Lịch sử xem phim
                    </div>
                </div>
                </div>}


            




        </div>
    )
}
