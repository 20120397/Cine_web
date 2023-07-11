"use client"
import Header_admin from "@/components/Admin_page/Header_admin/Header_admin";
import Sidebar from "@/components/Admin_page/Sidebar/Sidebar";
import styles from "./layout.module.css";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
export default function Layout ({children}:any){

const router=useRouter()
const user = useSelector((state: any) => state.auth.login.currentUser);
  if(user?.user?.role!=='manager'){
    router.push("/404")
  }
    return(
        <div className={styles.layout_admin}>
            <Sidebar/>
            <div className={styles.content}>
                <Header_admin/>
                {children}
            </div>
          
        </div>
    )
}