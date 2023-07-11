import movieAPI from '@/app/api/movieAPI';
import { useEffect, useState } from 'react';

import styles from './Upcoming.module.css';
import { psc,blp } from '@/assets/imgs'

export default function ListFilm() {
  const [movies, pickMovies] = useState<any[]>([]);

  const fetchMovies = async () => {
    const MovieData = await movieAPI.getUpComingMovies();
    console.log("res: ", MovieData);
    pickMovies(MovieData.data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleMovieClick = (showtimeId: string) => {
    window.location.href = `/movie/${showtimeId}`;
  };

  return (
    <>
      <div className={styles.body}>
            <div className={styles.dragon}>
                <img src={psc.src} alt="Movie" />
            </div>

        <div className={styles.listfilm}>
          {movies.slice(0, 8).map((movie, index) => (
            <div className={styles.movie_item} key={index}>
              <img
                src={movie.movieImage}
                alt="Hình ảnh không được hiển thị"
                data-src={movie.movieImage}
                className={styles.img}
                data-was-processed="true"
              />
              <div className={styles.upper_text}>{movie.movieTitle}</div>
                <button
                className={`${styles.btn_more} ${styles.upper_text}`}
                onClick={() => handleMovieClick(movie.showtimeId)} // Pass movie.showtimeId as an argument
              >
                Xem chi tiết
              </button>
            </div>
          ))}
        </div>

        <div className={styles.dragon}>
                <img src={blp.src} alt="Movie" />
            </div>
      </div>
    </>
  );
}
