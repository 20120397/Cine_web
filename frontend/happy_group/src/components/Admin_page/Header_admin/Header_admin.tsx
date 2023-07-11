"use client"
import React from "react";
import styles from "./Header_admin.module.css"
import { help_ad, home_ad, logo_ad, movie_ad, msg_ad, open_ad, person_ad, pwd_ad, search_ad, setting_ad, signout_ad } from "@/assets/svgs";
import Image from "next/image";
import { avt_ad } from "@/assets/imgs";
import { useSelector } from "react-redux";
export default function Header_admin (){

    const user = useSelector((state: any)=> state.auth.login.currentUser)
    return(
        <div className={styles.header}>
            {/* sub header  */}
            <div className={styles.sub_header}>
                <div className={styles.icon}>   <Image src={open_ad} alt="" width={15} height={15}/></div>
                {/* <div className={styles.search_bar}>
                    <Image src={search_ad} alt="" width={20} height={20}/>
                    <input type="text" placeholder="Search here . . ." className={styles.input} />
                </div> */}
                <div className={styles.avatar}>
                    <Image src={avt_ad} alt="" width={20} height={20}/>
                    Hi, {user?.user?.name}
                </div>
            </div>
            {/* navigate */}
            {/* <div className={styles.navbar}>
                <ul className={styles.nav_list}>
                    <li className={styles.nav_item}>All</li>
                    <li className={styles.nav_item}>Now showing</li>
                    <li className={styles.nav_item}>Coming soon</li>
                </ul>
                <div className={styles.search_bar_nav}>
                        <Image src={search_ad} alt="" width={15} height={15} className={styles.search_bar_nav_icon}/>
                        <input type="text" placeholder="Enter movie name to search movie. . ." className={styles.input} />
                    </div>
                </div> */}
            </div>
    )
}