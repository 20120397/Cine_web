"use client"
import React from "react";
import styles from "./Sidebar.module.css"
import { help_ad, home_ad, logo_ad, movie_ad, msg_ad, person_ad, pwd_ad, setting_ad, signout_ad } from "@/assets/svgs";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "@/redux/apiRequests";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import { log } from "console";
export default function Sidebar (){
    const dispatch =useDispatch()
    const router =useRouter()
    const user= useSelector((state:any)=>state.auth.login.currentUser)
    const handleSignoutBtn=()=>{
        logOut(dispatch,user?.user?._id,user?.token, axios,router)
    }
    const pathname= usePathname()
    console.log("pat",pathname)
    const ele_title=["Dashboard", "Movies","Schedules","Messages","Settings", "Password","Help","Signout"]
    const ele_image =[home_ad, movie_ad, person_ad, msg_ad, setting_ad, pwd_ad, help_ad, signout_ad]
    const ele_url=["/admin/","/admin/movie","/admin/schedule","admin/","admin/","admin/schedule","admin/schedule"]
    return(
        <div className={styles.sidebar}>
            <div className={styles.header}>
                <Image width={40}height={40}src={logo_ad} alt="" className={styles.header_icon}/>
                US Happy 
            </div>
            <div className={styles.menu}>
               {ele_title.map((ele:string, index: number)=>(
                ele_url[index]===pathname?( <div key ={index} className={`${styles.menu_item} ${styles.menu_item_focus_custom}`} onClick={()=>router.push(ele_url[index])}>
                <Image  className={styles.icon} width={30}height={30}src={ele_image[index]} alt=""/>
                {ele}</div>):(
                     <div key ={index} className={`${styles.menu_item}`} onClick={()=>router.push(ele_url[index])}>
                     <Image  className={styles.icon} width={30}height={30}src={ele_image[index]} alt=""/>
                     {ele}</div>
                )
               
               ))}
                {/* <div className={`${styles.menu_item} ${styles.menu_item_focus_custom}`} onClick={()=>router.push("/admin/movie")}>
                    <Image  className={styles.icon} width={30}height={30}src={movie_ad} alt=""/>
                    Movies</div> */}
               
            </div>
        </div>
    )
}