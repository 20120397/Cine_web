import React from "react";
import styles from "./Movies.module.css"
import { add_ad, help_ad, home_ad, logo_ad, movie_ad, msg_ad, person_ad, pwd_ad, setting_ad, signout_ad } from "@/assets/svgs";
import Image from "next/image";
export default function Movies_Admin (){


    return(
        <div className={styles.movies_part}>
            {/* filter to date */}
            <div className={styles.header}>
                <div className={styles.addmovie}>
                    <Image src={add_ad} alt=""/>  movie
                </div>
                <div className={styles.timing}> <label htmlFor="" className={styles.label}>Start:</label>
                <p className={styles.header__date}>31/07/2022</p>
               </div>
                <div className={styles.timing}><label htmlFor="" className={styles.label}>End:</label>
                <p className={styles.header__date}>31/07/2022</p>
            </div>
                </div>
            {/* table */}
            <div className={styles.movies_table}>
                <div className={styles.movies_table_col}>No.</div>
                <div className={styles.movies_table_col}>Movie ID</div>
                <div className={styles.movies_table_col}>Name</div>
                <div className={styles.movies_table_col}>Genre</div>
                <div className={styles.movies_table_col}>Length</div>
                <div className={styles.movies_table_col}>Start date</div>
                <div className={styles.movies_table_col}>End date</div>
                <div className={styles.movies_table_col}>Rating</div>
                <div className={styles.movies_table_col}>Actions</div>
            </div>
        </div>
    )
}