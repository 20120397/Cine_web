/* eslint-disable react/jsx-key */
import movieAPI from '@/app/api/movieAPI'
import { useEffect,useState } from 'react'

import styles from './Nowshowing.module.css'
import { pdc } from '@/assets/imgs'

export default function ListFilm () {
    
    const [movies, pickMovies] = useState<any[]>([]); 

    const mov = async () => {
    const MovieData = await movieAPI.getNowShowingMovies();
    console.log("res: ", MovieData);
    pickMovies(MovieData.data);

    }
    
    useEffect(()=>{
        mov();
    },[])

    const handleMovieClick = (showtimeId: string) => {
        window.location.href = `/movie/${showtimeId}`;
      };
    
    return (
        <>
        
        <div className={styles.container}>
            <div className={styles.animation_container}>
                <div className={styles.text_animation}>🎉✨️ UsHappy - Thế giới phim trực tuyến cho bạn! 🎬🌍 Với hàng ngàn bộ phim 🎭🍿📺đa dạng từ mọi thể loại🌟🌈📽️🎭🎞️🍿📺💫 và quốc gia trên thế giới🎭 🌟🎉🎈🎥 Với giao diện thân thiện và dễ sử dụng  🌈🎬🎉 UsHappy - nơi tạo nên những kỷ niệm vui vẻ và đáng nhớ trong cuộc sống của bạn! 🧡🎥✨ 🎞️🍿
 </div>
            </div>
        </div>

        <div className={styles.body}>
            <div className={styles.dragon}>
                <img src={pdc.src} alt="Movie" />
            </div>




            <div className={styles.listfilm}>
                {
    
                movies.slice(0, 4).map((movie, index) => (
                    <div className={styles.movie_item}>
                        <img src={movie.movieImage} alt="Hình ảnh không được hiển thị" data-src={movie.movieImage} className={styles.img} data-was-processed="true"></img>
                        <div className={styles.upper_text}>{movie.movieTitle}</div>
                        <button
                className={`${styles.btn_more} ${styles.upper_text}`}
                onClick={() => handleMovieClick(movie.showtimeId)} // Pass movie.showtimeId as an argument
              >
                Xem chi tiết
              </button>
                    </div>
                    ))
                }
            </div>

        </div>
        </>   
    )
}