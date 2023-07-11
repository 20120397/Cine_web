import styles from './footer.module.css'
import { fbIcon_foot,instaIcon_foot, twtIcon, androidIcon, iosIcon,bg_foot, un_foot, logo_white} from '@/assets/svgs'
import { test } from '@/assets/imgs'
import Image from 'next/image'
import Link from 'next/link'
export default function Footer () {
    return (
        <div className={styles.footer}>
            <div className={styles.content}>
                {/* <div> */}
            <div className={styles.foot_col}>
                <ul className={styles.foot_list}>
                    <h1 className={styles.h1}>GIỚI THIỆU</h1>
                    <Image src={un_foot} alt='' className={styles.under}/>
                    <li className={styles.foot_list_item}>
                        <Link className={styles.link} href={''}>Về chúng tôi</Link>
                    </li>
                    <li className={styles.foot_list_item}>
                        <Link className={styles.link} href={''}>Thỏa thuận sử dụng</Link>
                    </li>
                    <li className={styles.foot_list_item}>
                        <Link className={styles.link} href={''}>Quy chế hoạt động</Link>
                    </li>
                    <li className={styles.foot_list_item}>
                        <Link className={styles.link} href={''}>Chính sách bảo mật</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.foot_col}>
                <ul className={styles.foot_list}>
                    <h1 className={styles.h1}>PHIM HOT</h1>
                    <Image src={un_foot} alt='' className={styles.under}/>

                    <li className={styles.foot_list_item}>
                        <Link className={styles.link} href={''}>Phim hot của ngày</Link>
                    </li>
                    <li className={styles.foot_list_item}>
                        <Link className={styles.link} href={''}>Phim hot của tuần</Link>
                    </li>
                    <li className={styles.foot_list_item}>
                        <Link className={styles.link} href={''}>Phim hot của tháng</Link>
                    </li>
                    <li className={styles.foot_list_item}>
                        <Link className={styles.link} href={''}>Phim hot tuần tới</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.foot_col}>
                <ul className={styles.foot_list}>
                    <h1 className={styles.h1}>GÓC ĐIỆN ẢNH</h1>
                    <Image src={un_foot} alt='' className={styles.under}/>

                    <li className={styles.foot_list_item}>
                        <Link className={styles.link} href={''}>Thể loại phim</Link>
                    </li>
                    <li className={styles.foot_list_item}>
                        <Link className={styles.link} href={''}>Bình luận phim</Link>
                    </li>
                    <li className={styles.foot_list_item}>
                        <Link className={styles.link} href={''}>Blog điện ảnh</Link>
                    </li>
                    <li className={styles.foot_list_item}>
                        <Link className={styles.link} href={''}>Đạo diễn hot</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.foot_col}>
                <ul className={styles.foot_list}>
                    <h1 className={styles.h1}>HỖ TRỢ</h1>
                    <Image src={un_foot} alt='' className={styles.under}/>

                    <li className={styles.foot_list_item}>
                        <Link className={styles.link} href={''}>Hỗ trợ</Link>
                    </li>
                    <li className={styles.foot_list_item}>
                        <Link className={styles.link} href={''}>Sales & services</Link>
                    </li>
                    <li className={styles.foot_list_item}>
                        <Link className={styles.link} href={''}>Rạp/ Giá vé </Link>
                    </li>
                    <li className={styles.foot_list_item}>
                        <Link className={styles.link} href={''}>Tuyển dụng</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.foot_col}>
                <ul className={styles.foot_list}>
                    <h1 className={styles.h1}>KẾT NỐI VỚI HAPPY GROUP</h1>
                    <Image src={un_foot} alt='' className={styles.under}/>
                    <li className={styles.icon}>
                        <Image src={instaIcon_foot} alt=''/>
                    </li>
                    <li className={styles.icon}>
                        <Image src={fbIcon_foot} alt=''/>
                    </li>
                    <li className={styles.icon}>
                        <Image src={twtIcon} alt=''/>
                    </li>
                    
                
                    
                
                </ul>
                <ul className={styles.foot_list}>
                    <h1 className={styles.h1}>DOWNLOAD APP</h1>
                    <Image src={un_foot} alt='' className={styles.under}/>
                    <li className={styles.icon}>
                    <Image src={iosIcon} alt=''/>
                    </li>
                    <li className={styles.icon}>
                    <Image src={androidIcon} alt=''/>
                    </li>
                  
               
                </ul>
            {/* </div> */}
            </div>
            </div>
            <div className={styles.bottom}>
                <Image src={logo_white} alt='' className={styles.logo} width={60} height={60}/>
                  Happy Group 
                <p className={styles.p}>KTX khu A, khu phố 6, phường Linh trung, thành phố Thủ Đức, HCM</p>
            </div>
            {/* <Image src={bg_foot} alt='' className={styles.bg}/> */}
        </div>
    )
}