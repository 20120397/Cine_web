import styles from './popup_oauth_signup.module.css'

export default function Popup_Oauth_Signup() {


    return (
        <div className={styles.parent}>
        <div className={styles.popup}>
            <button className={styles.btn_exit}>Thoát</button>
            <div className={styles.header}>
                <button className={styles.btn_switch}>Đăng nhập </button>
                <h1 className={styles.h1}>Đăng ký</h1>

            </div>
            <div className={styles.form}>
                <input type="text" placeholder='Tên đăng nhập' className={styles.username} />
                <input type="text" placeholder='Mật khẩu' className={styles.username} />
                <input type="text" placeholder='Tên đăng nhập' className={styles.username} />
                <input type="text" placeholder='Mật khẩu' className={styles.username} />
                <input type="text" placeholder='Tên đăng nhập' className={styles.username} />
                <input type="text" placeholder='Mật khẩu' className={styles.username} />

            </div>
            <div className={styles.footer}>
                <button className={styles.btn}>Đăng ký</button>
                <p className={styles.forget_pwd}>Đã có tài khoản? Đăng nhập ngay!</p>
                

            </div>      
            <div className={styles.rectangles}>      
            <div className={styles.rec3}></div>    
            <div className={styles.rec2}></div>
                <div className={styles.rec1}></div>


            </div>
        </div>
        </div>


    )
}