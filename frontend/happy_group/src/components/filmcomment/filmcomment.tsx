import s from './filmcomment.module.css'
import { fbIcon, searchIcon} from '@/assets/svgs'
import Image from 'next/image'
import React from 'react'

export default function filmcomment () {
    return (
    <div className={s.filmcomment_container}>
        <div className={s.container}>
            <div className={s.column}>
                <h2 className={s.h2}> 
                    <a className={s.a1} href="https://www.galaxycine.vn/binh-luan-phim">BÌNH LUẬN PHIM</a>
                </h2>
                <div className={s.box}>
                    <div className={s.imagewrapper}>
                        <a className={s.a} href="https://www.galaxycine.vn/binh-luan-phim/review-shazam-fury-of-the-gods-lon-xon-nhung-rat-nhon">
                        <img className={s.img} src="https://cdn.galaxycine.vn/media/2023/3/21/shazam-fury-of-the-gods-lon-xon-nhung-rat-nhon-7_1679369048192.jpg" alt="Mô tả ảnh"/>
                        </a>
                    </div>
                    <div className={s.content}>
                        <h3 className={s.h3}>
                            <a className={s.a} href="https://www.galaxycine.vn/binh-luan-phim/review-shazam-fury-of-the-gods-lon-xon-nhung-rat-nhon">[Review] Shazam! Fury Of The Gods: Lộn Xộn Nhưng Rất “Nhộn”!</a>
                        </h3>
                        <img className={s.imglike} src="https://i.imgur.com/yVc6IOg.png" alt="Mô tả ảnh"/>
                        <p className={s.p}> 
                            <span className={s.span}>
                            Nếu nghĩ Nhện nhí nhà Marvel hay gã phản anh hùng Deadpool 
                            là những tên siêu năng lực nói nhiều nhất vũ trụ phim siêu anh hùng thì bạn nhầm to rồi. 
                            Chàng Shazam có khi ồn ào bằng cả đôi Spiderpool cộng lại!
                            </span>
                        </p>
                    </div>
                </div>
                <div className={s.box}>
                    <div className={s.imagewrapper}>
                        <a className={s.a} href="https://www.galaxycine.vn/binh-luan-phim/review-everything-everywhere-all-at-once-phim-oscar-khong-he-kho-hieu">
                        <img className={s.img} src="https://cdn.galaxycine.vn/media/2023/3/21/everything-everywhere-all-at-once-phim-oscar-khong-he-kho-hieu-5_1679368313437.jpg" alt="Mô tả ảnh"/>
                        </a>
                    </div>
                    <div className={s.content}>
                        <h3 className={s.h3}>
                            <a className={s.a} href="https://www.galaxycine.vn/binh-luan-phim/review-everything-everywhere-all-at-once-phim-oscar-khong-he-kho-hieu">[Review] Everything Everywhere All At Once: Phim Oscar Không Hề Khó Hiểu!</a>
                        </h3>
                        <img className={s.imglike} src="https://i.imgur.com/yVc6IOg.png" alt="Mô tả ảnh"/>
                        <p className={s.p}>
                            <span className={s.span}>
                                Với kinh phí vỏn vẹn 25 triệu $, Everything Everywhere All At Once thu hơn 111 triệu $ 
                                tại các rạp chiếu phim toàn cầu và 7 tượng vàng Oscar. Một thành công hết sức mỹ mãn cho hãng A24! 
                            </span>
                        </p>
                    </div>
                </div>
                <div className={s.box}>
                    <div className={s.imagewrapper}>
                        <a className={s.a} href="https://www.galaxycine.vn/binh-luan-phim/review-sieu-lua-gap-sieu-lay-phi-vu-hoan-hao-cua-dien-anh-viet">
                        <img className={s.img} src="https://cdn.galaxycine.vn/media/2023/3/5/450_1677988268924.jpg"  alt="Mô tả ảnh"/>
                        </a>
                    </div>
                    <div className={s.content}>
                        <h3 className={s.h3}>
                            <a className={s.a} href="https://www.galaxycine.vn/binh-luan-phim/review-sieu-lua-gap-sieu-lay-phi-vu-hoan-hao-cua-dien-anh-viet">[Review] Siêu Lừa Gặp Siêu Lầy: Phi Vụ Hoàn Hảo Của Điện Ảnh Việt</a>
                        </h3>
                        <img className={s.imglike} src="https://i.imgur.com/yVc6IOg.png" alt="Mô tả ảnh"/>
                        <p className={s.p}> 
                            <span className={s.span}>
                                Siêu Lừa Gặp Siêu Lầy là một cuốn phim tốt về mọi mặt. Từ kịch bản, tạo hình, diễn xuất, âm nhạc… 
                                Nếu mong muốn có những giây phút giải trí thư giãn sau nhiều giờ làm việc căng thẳng thì đây sẽ là lựa chọn hoàn hảo. 
                            </span>
                        </p>
                    </div>
                </div>
                <div className={s.box}>
                    <div className={s.imagewrapper}>
                        <a className={s.a} href="https://www.galaxycine.vn/binh-luan-phim/review-ant-man-and-the-wasp-quantumania-cu-lua-xuat-sac-cua-marvel">
                        <img className={s.img} src="https://cdn.galaxycine.vn/media/2023/2/18/ant-man-and-the-wasp-quantumania-cu-lua-xuat-sac-cua-marvel-3_1676654214338.jpg" alt="Mô tả ảnh"/>
                        </a>
                    </div>
                    <div className={s.content}>
                        <h3 className={s.h3}>
                            <a className={s.a} href="https://www.galaxycine.vn/binh-luan-phim/review-ant-man-and-the-wasp-quantumania-cu-lua-xuat-sac-cua-marvel">[Review] Ant-Man And The Wasp Quantumania: Cú Lừa Xuất Sắc Của Marvel!!</a>
                        </h3>
                        <img className={s.imglike} src="https://i.imgur.com/yVc6IOg.png" alt="Mô tả ảnh"/>
                        <p className={s.p}> 
                            <span className={s.span}>
                                Ai nghĩ rằng trailer Ant-Man And The Wasp: Quantumania đã tóm tắt bộ phim thì lầm to rồi. 
                                Một lần nữa, Marvel tặng tất cả chúng ta cú lừa ngoạn mục. 
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className={s.column}>
                <h2 className={s.h2}> 
                    <a className={s.a1} href="https://www.galaxycine.vn/movie-blog">BLOG ĐIỆN ẢNH</a>
                </h2>
                <div className={s.box}>
                    <div className={s.imagewrapper}>
                        <a className={s.a} href="https://www.galaxycine.vn/movie-blog/oscar-2023-nhung-chuyen-hau-truong-day-bat-ngo">
                        <img className={s.img} src="https://cdn.galaxycine.vn/media/2023/3/10/oscar-2023-nhung-chuyen-hau-truong-day-bat-ngo-5_1678431632839.jpg" alt="Mô tả ảnh"/>
                        </a>
                    </div>
                    <div className={s.content}>
                        <h3 className={s.h3}>
                            <a className={s.a} href="https://www.galaxycine.vn/movie-blog/oscar-2023-nhung-chuyen-hau-truong-day-bat-ngo">Oscar 2023: Những Chuyện Hậu Trường Đầy Bất Ngờ</a>
                        </h3>
                        <img className={s.imglike} src="https://i.imgur.com/yVc6IOg.png" alt="Mô tả ảnh"/>
                        <p className={s.p}> 
                            <span className={s.span}>
                                Những điều thú vị đằng sau sự kiện điện ảnh lớn nhất năm! Hãy cùng xem ai sẽ là người chiến thắng!
                            </span>
                        </p>
                    </div>
                </div>
                <div className={s.box}>
                    <div className={s.imagewrapper}>
                        <a className={s.a} href="https://www.galaxycine.vn/movie-blog/boc-trung-phuc-sinh-ant-man-and-the-wasp-quantumania">
                        <img className={s.img} src="https://cdn.galaxycine.vn/media/2023/2/21/boc-trung-phuc-sinh-ant-man-and-the-wasp-quantumania-6_1676952634061.jpg" alt="Mô tả ảnh"/>
                        </a>
                    </div>
                    <div className={s.content}>
                        <h3 className={s.h3}>
                            <a className={s.a} href="https://www.galaxycine.vn/movie-blog/boc-trung-phuc-sinh-ant-man-and-the-wasp-quantumania">Bóc Trứng Phục Sinh Ant-Man And The Wasp: Quantumania</a>
                        </h3>
                        <img className={s.imglike} src="https://i.imgur.com/yVc6IOg.png" alt="Mô tả ảnh"/>
                        <p className={s.p}> 
                            <span className={s.span}>
                                Những bộ phim thuộc vũ trụ điện ảnh Marvel luôn “chôn” rất nhiều Trứng Phục Sinh để các fan trung thành khám phá. 
                                Là tác phẩm phim chiếu rạp thứ 3 về Người Kiến, Ant-Man And The Wasp: Quantumania có cả tá Easter Egg. 
                                Các Stars đã đào được bao nhiêu “quả trứng” rồi? Hãy cùng khám phá nhé.
                            </span>
                        </p>
                    </div>
                </div>
                <div className={s.box}>
                    <div className={s.imagewrapper}>
                        <a className={s.a} href="https://www.galaxycine.vn/movie-blog/fast-x-vin-diesel-ru-dan-sieu-anh-hung-dua-xe">
                        <img className={s.img} src="https://cdn.galaxycine.vn/media/2023/2/14/fast-x--vin-diesel-ru-dan-sieu-anh-hung-dua-xe-6_1676348176123.jpg" alt="Mô tả ảnh"/>
                        </a>
                    </div>
                    <div className={s.content}>
                        <h3 className={s.h3}>
                            <a className={s.a} href="https://cdn.galaxycine.vn/media/2023/2/14/fast-x--vin-diesel-ru-dan-sieu-anh-hung-dua-xe-6_1676348176123.jpg">Fast X: Vin Diesel Rủ Dàn Siêu Anh Hùng Đua Xe?</a>
                        </h3>
                        <img className={s.imglike} src="https://i.imgur.com/yVc6IOg.png" alt="Mô tả ảnh"/>
                        <p className={s.p}> 
                            <span className={s.span}>
                                Fast X – phần mở đầu cho “cuộc đua cuối” của đại gia đình Toretto vừa tung ra trailer siêu hấp dẫn vào 10.02 vừa qua. 
                            </span>
                        </p>
                    </div>
                </div>
                <div className={s.box}>
                    <div className={s.imagewrapper}>
                        <a className={s.a} href="https://www.galaxycine.vn/movie-blog/luat-dien-anh-moi-co-gi-moi">                    
                        <img className={s.img} src="https://cdn.galaxycine.vn/media/2023/2/3/1800x1200-100_1675391884941.jpg" alt="Mô tả ảnh"/>
                        </a>
                    </div>
                    <div className={s.content}>
                        <h3 className={s.h3}>
                            <a className={s.a} href="https://www.galaxycine.vn/movie-blog/luat-dien-anh-moi-co-gi-moi">Luật Điện Ảnh Mới Có Gì Mới?</a>
                        </h3>
                        <img className={s.imglike} src="https://i.imgur.com/yVc6IOg.png" alt="Mô tả ảnh"/>
                        <p className={s.p}> 
                            <span className={s.span}>
                                So với Luật Điện ảnh 2006 trước đây, Luật Điện ảnh 2022 (có hiệu lực từ ngày 01.01.2023) thay đổi một số điểm nổi bật sau đây:
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}