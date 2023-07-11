/* eslint-disable react/jsx-key */
"use client"
import { movieInterface } from "@/app/api/apiResponse";
import movieAPI from "@/app/api/movieAPI";
import { add_ad, create, edit, search_ad } from "@/assets/svgs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Movies.module.css";


export default function Movies_Admin (){
    const [movies, setMovies] = useState<movieInterface[]>([])
    const user = useSelector((state: any)=>state.auth.login.currentUser)
    console.log("user", user?.token)
    const tabname=["All", "Now Showing", "Coming Soon"]
    const [tabidx, setTabidx]=useState(0)
    const fetchMovies = async () => {
        const res = await movieAPI.getAllMovies (user?.token);
        setMovies(res.data)
    }
    const handleCreateBtn=(id: string)=>{

    }
        useEffect(()=>{
        fetchMovies()
    },[])
    return(
    <div>
        <div className={styles.navbar}>
            <ul className={styles.nav_list}>
                {tabname.map((e, index)=> e===tabname[tabidx]?(<li className={styles.nav_item_curr} >{e}</li>): (<li className={styles.nav_item} onClick={()=>setTabidx(index)}>{e}</li>))}
              
            </ul>
            <div className={styles.search_bar_nav}>
                <Image src={search_ad} alt="" width={15} height={15} className={styles.search_bar_nav_icon}/>
                <input type="text" placeholder="Enter movie name to search movie. . ." className={styles.input} />
            </div>
        </div>
    
        <div className={styles.movies_part}>
            {/* filter to date */}
            <div className={styles.header}>
                <div className={styles.addmovie}>
                    <Image src={add_ad} alt="" width={15} height={15}/> Add movie
                </div>
                <div className={styles.timing}> Start:   </div>
                <div className={styles.header__date}>31/07/2022</div>
            
                <div className={styles.timing}>End:      </div>
                <div className={styles.header__date}>31/07/2022</div>
      
            </div>
            {/* table */}
            <div className={styles.movies_table}>
                <div className={styles.movies_table_header}>
                    <div className={styles.movies_table_col}>No.</div>
                    <div className={styles.movies_table_col}>Title</div>
                    <div className={styles.movies_table_col}>Genre</div>
                    <div className={styles.movies_table_col}>Director</div>
                    <div className={styles.movies_table_col}>Cast</div>
                    <div className={styles.movies_table_col}>Duration</div>
                    <div className={styles.movies_table_col}>Language</div>
                    <div className={styles.movies_table_col}>Rating</div>
                    <div className={styles.movies_table_col}>Actions</div>
                </div>
                <div className={styles.movies_table_rows}>
                  
                   {movies.map((movie:movieInterface, index)=>(
                    // eslint-disable-next-line react/jsx-key
                    <div className={styles.movies_table_row}>
                        <div className={styles.movies_table_col}>{index +1}</div>
                        <div className={styles.movies_table_col}>{movie.title}</div>
                        <div className={styles.movies_table_col}>{movie.genre[0]}</div>
                        <div className={styles.movies_table_col}>{movie.director}</div>
                        <div className={styles.movies_table_col}>{movie.cast[0]}, {movie.cast[1]}</div>
                        <div className={styles.movies_table_col}>{movie.duration}</div>
                        <div className={styles.movies_table_col}>{movie.language.map((lang, index)=> index===movie.language.length-1?<>{lang} </>:<>{lang}, </> )}</div>
                        <div className={styles.movies_table_col}>{movie.rating}</div>
                        <div className={styles.movies_table_col}>
                            <Link href={`/admin/movie/${movie.showtimeId}`}><Image src={edit} alt="" width={15} height={15}/></Link>
                            <Image src = {create} alt =" " width={15} height={15} onClick={()=> handleCreateBtn(movie._id)}/>
                        </div>
                    </div>
                   ))}
                </div>
                    
                </div>    
            </div>
    </div>
    )
}