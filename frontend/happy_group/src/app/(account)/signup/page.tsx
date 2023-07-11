"use client"
import PopupResult from '@/components/popup_resultAuth/popup_result';
import { loginUser, registerUser } from '@/redux/apiRequests';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './signup.module.css';
export default function Signup_Form() {
    const [username_regis,setusername_regis]=useState("");
    const [password_regis,setpassword_regis]=useState("");
    const [fullname,setfullname]=useState("");
    const [email,setemail]=useState("");
    const [phone,setphone]=useState("");
    const [repassword,setrepassword]=useState("");

    const dispatch=useDispatch();
    const router=useRouter();
    const [noti, setnoti]= useState("")
    const [modalOpen,setModalOpen]=useState(false);
    const [error, setError]=useState("loi ne")
    const handleSubmit = async (e: { preventDefault: () => void; })=>{
        e.preventDefault();
        const newUser={
            username: username_regis,
            password: password_regis,
            name: fullname,
            email:email,
            phone: phone
        }
        //console.log("newuser", newUser)
        //console.log("login: ",{username:username_regis,password: password_regis})
      
      
        try{
            const res = await registerUser(newUser, dispatch,router)
            loginUser({username:username_regis,password: password_regis}, dispatch,router)
            console.log("ré", res)
            setnoti("Đăng ký thành công!");
            setModalOpen(true)
        }
        catch(err: any){
            console.log("err", err.error)
            setnoti("Thông tin đăng ký không hợp lệ!")
            setModalOpen(true)
        }
        setTimeout(() => {
            setModalOpen(false)
        }, 4000);
        
    }

    return (
    <>
    {/* <div className={styles.header}>
                <span className={styles.btn_switch} onClick={()=>router.push("/login")}>Đăng nhập </span>
                <span className={styles.h1}>Đăng ký</span>
            </div> */}
  
            <form className={styles.form} onSubmit={handleSubmit}>
                <input type="text" id="fullname" onChange={(e) => setfullname(e.target.value)} placeholder='Tên' className={styles.username} />
                <input type="text" id="username_regis" onChange={(e) => setusername_regis(e.target.value)} placeholder='Tên đăng nhập' className={styles.username} />
                <input type="password" id="password_regis" onChange={(e) =>  setpassword_regis(e.target.value)} placeholder='Mật khẩu' className={styles.username} />
                <input type="password" id="repassword" onChange={(e) => setrepassword(e.target.value)} placeholder='Nhập lại mật khẩu' className={styles.username} />
                <input type="text" id="email" onChange={(e) => setemail(e.target.value)} placeholder='Email' className={styles.username} />
                <input type="text" id="phone" onChange={(e) =>setphone(e.target.value)} placeholder='Phone' className={styles.username} />
                
            <div className={styles.footer}>
                {/* <span>{error}kk</span> */}
                <button className={styles.btn} onClick={()=>handleSubmit}>Đăng ký</button>
                <p className={styles.forget_pwd}>
                    <Link href={''} className={styles.link}>Đã có tài khoản? Đăng nhập ngay!</Link></p>

            </div>  
            <PopupResult message={noti} button={[]} urls={[]}
      modalOpen={modalOpen} setModalOpen={setModalOpen}  />
            </form>
            </>
    

    )
}