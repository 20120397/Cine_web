"use client"
import { usePathname, useRouter } from 'next/navigation';
import styles from './layout.module.css';


export default function Auth_Layout({children}:any) {
 
    const pathname=usePathname();
    const router=useRouter();


    return (
        <div className={styles.parent}>
        <div className={styles.popup}>
            <button className={styles.btn_exit} onClick={()=>router.push("/")}>Thoát</button>
        {pathname==="/login"? (
            <div className={styles.header}>
                <span className={styles.h1}>Đăng nhập </span>
                <span className={styles.btn_switch} onClick={()=>router.push("/signup")}>Đăng ký</span>
        
            </div>
        ):(
            <div className={styles.header}>
                <span className={styles.btn_switch} onClick={()=> router.push("/login")}>Đăng nhập </span>
         
                <span className={styles.h1}>Đăng ký</span>
            </div>
        )}
     {/* {pathname==="/login"?(<Login_Form/>):( <Signup_Form/>)} */}
     {children}
        
      
            <div className={styles.rectangles}>      
            <div className={styles.rec3}></div>    
            <div className={styles.rec2}></div>
            <div className={styles.rec1}></div>


            </div>
        </div>
        </div>


    )
}