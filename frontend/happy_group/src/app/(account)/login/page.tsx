 "use client"

import Link from 'next/link'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from './login.module.css'
// import { getUsersData } rom '../state/actions/userActions'
import PopupResult from '@/components/popup_resultAuth/popup_result'
import { loginUser } from '@/redux/apiRequests'
import { useRouter } from 'next/navigation'



export default function Login_Form () {

  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [noti, setnoti]= useState("")
  const [modalOpen,setModalOpen]=useState(false);
  // const navigate = useNavigate();
  const router=useRouter();
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const newUser = {
      username: username,
      password: password,
    };
     console.log(newUser)

//console.log("res",res)


    try {
      //const res = await UserAPI.login(newUser)
      const  res1= await loginUser(newUser, dispatch,router);
      //console.log("res",res.data)
      //router.push("/")
    } catch (error:any) {
      console.log("err::");
      console.log("err:", error);
      setnoti("Tên đăng nhập hoặc mật khẩu không đúng.")
      setModalOpen(true)
      setTimeout(() => {
        setModalOpen(false)
      }, 4000);
    }
  }



  return (
    <>
    {/* <div className={styles.header}>
                <span className={styles.h1}>Đăng nhập </span>
                <span className={styles.btn_switch} onClick={()=>router.push("/signup")}>Đăng ký</span>
            </div> */}
   
            <form className={styles.form} onSubmit={handleSubmit} >
              <div className={styles.input}> <input type="text" id='username' onChange={(e)=> setUsername(e.target.value)} placeholder='Tên đăng nhập' className={styles.username} />
                <input type="password" id ='password' onChange={(e)=> setPassword(e.target.value)} placeholder='Mật khẩu' className={styles.username} /></div>
               
                <div className={styles.footer}>
                    <div className={styles.forget_pwd}>
                     <Link href={''} className={styles.link}>Quên mật khẩu?</Link>
                    </div>
                    <button className={styles.btn}>Đăng nhập</button>
                </div> 
            </form>
            <div className={styles.modal}>{
              noti===""?(<></>):(
                <PopupResult message={noti} button={[]} urls={["/", `/user/reservation/`] }
      modalOpen={modalOpen} setModalOpen={setModalOpen}  />
              )
            }
            
            </div>
        
            </>
        
  )
}

