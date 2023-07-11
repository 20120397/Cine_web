"use client"
import { food1, food2, food3, food4 } from '@/assets/imgs';
import PopupResult from '@/components/popup_result/popup_result';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { showtimeInterface } from '../api/apiResponse';
import screenAPI from '../api/screenAPI';
import showtimeAPI from '../api/showtimeAPI';
import styles from './seat.module.css';

export default function Seat () {
  var currentURL = window.location.href;
  var url = new URL(currentURL);
  var searchParams = new URLSearchParams(url.search);
  const user = useSelector((state: any)=> state.auth.login.currentUser)
  const userId= user?.user?._id
  const [seats, setSeats] = useState<any[]>([]);
  const [selectedSeats, setSelectedSeats] = useState<any[]>([]);
  const [selectedDoubleSeats, setSelectedDoubleSeats] = useState<any[]>([]);
  const [isChoosingSeat, setIsChoosingSeat] =useState(1)
  const [time,setTime] = useState(searchParams.get('time')||"")
  const [scheduleId, setScheduleID]= useState(searchParams.get('showtimeId')||"")
  const [seatArr, setSeatArr]= useState<any[]>([])
  const price =[50000,100000]
  const date = searchParams.get("date")||""

  const theatreName = searchParams.get('theatreName')||""
  const [bookedseats, setBookedSeats] = useState<any[]>([])
  const [screenInfo, setScreenInfo] = useState<any>()
  const showtimeId=searchParams.get('showtimeId')||""
  const [showtime, setShowtime]=useState<showtimeInterface|any>()
  const [banks, setBanks] = useState<any[]>([])

  useEffect(() => {
    const fetchScreen = async () => {

      const res = await screenAPI.getScreenByShowtime(user?.token,showtimeId, theatreName,date, time);

      setScreenInfo(res.data);
      setSeatArr(res.data.seatArray);

      // selectedSeats?.forEach((element, index) => {
      //   if (res.data.seatArray[element[0]][element[1]]===1){
      //     selectedSeats.splice(index,1);
      // }
      
        
      // });

      // selectedDoubleSeats.forEach((element, index) => {
      //   if (res.data.seatArray[element[0]][element[1]]===1){
      //     selectedDoubleSeats.splice(index,1);
      // }
      
        
      // });
          
       
      } 
    fetchScreen();
 
  },[]);


  const fetchShowtime = async ()=>{
    const res = await showtimeAPI.getShowtime(showtimeId);
    setShowtime(res.data);

  }
  const fetchBanks = async ()=>{
  //  const res = await fetch()
   axios
      .get("https://api.vietqr.io/v2/banks")
      .then((res) => {
        setBanks(res.data.data);
        console.log("hhi", res.data.data)
        return res.data ;
      })
  }
  useEffect(()=>{
    fetchBanks()
    fetchShowtime();
  },[])
  const convert2Alphabet = (seat:any[])=>{
    const alp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", 
  "M", "N", "O", "P", "Q", "R"]
    const row = seat[0]
    return [alp[row], (seat[1]+1).toString()]  ;  
  }
 
  const setBookedSeatss = async function (id: string, data: any){
    setBookedSeats([])
    const res = await screenAPI.setBookedSeat(screenInfo._id,data, user?.token)
    const dt =res.data
    let seats:string[]
    seats=bookedseats
    for (let i=0;i<dt.bookedList.length;i++){
      seats.push(dt.bookedList[i]._id.toString() );
    }
    setBookedSeats(seats)
    return seats;
    //  res.data.bookedList.map((seat:any, index:number)=>{return seat._id})
  }
  const handleSeatClick = (arr:any[]) => {
    if (arr[0]!== seatArr.length-1){
      setSelectedSeats((prevSelectedSeats) => {
        if (prevSelectedSeats.some(ar => ar.toString() ===arr.toString())) {
          // Nếu seat đã được chọn, xóa khỏi danh sách selectedSeats
          setTotalPrice((selectedSeats.length-1)*price[0] + selectedDoubleSeats.length*price[1])

          return prevSelectedSeats.filter((id) => id.toString()!==arr.toString());
        } else {
          // Nếu seat chưa được chọn, thêm vào danh sách selectedSeats
          setTotalPrice((selectedSeats.length+1)*price[0] + selectedDoubleSeats.length*price[1])

            return [...prevSelectedSeats, arr];
        
        }
      });
    }
    else {
      setSelectedDoubleSeats((prevSelectedSeats) => {
        if (prevSelectedSeats.some(ar => ar.toString() ===arr.toString())) {
          // Nếu seat đã được chọn, xóa khỏi danh sách selectedSeats
          setTotalPrice((selectedSeats.length)*price[0] + (selectedDoubleSeats.length-1)*price[1])

          return prevSelectedSeats.filter((id) => id.toString()!==arr.toString());
        } else {
          // Nếu seat chưa được chọn, thêm vào danh sách selectedSeats
          setTotalPrice((selectedSeats.length)*price[0] + (selectedDoubleSeats.length+1)*price[1])

          return [...prevSelectedSeats, arr];
        }
      });
    }
    setTotalPrice(selectedSeats.length*price[0] + selectedDoubleSeats.length*price[1])
   
  };
  const handlecreatebtn = async()=>{
    const res = await screenAPI.createScreen(screenInfo.scheduleId, "12:00")
    setScreenInfo(res.data)
  }
  const vietnamBankAccountPattern = /^[0-9]{10,13}$/;
  const [bankAccountNumber, setBankAccount] =useState("") ;
  const isValidBankAccount = vietnamBankAccountPattern.test(bankAccountNumber);
  
  console.log(isValidBankAccount); // Output: true
  const [noti, setNoti]= useState("")
  const [reser, setreser] =useState("")
  const [modelOpen, setModalOpen]=useState(false)
  const [totalPrice, setTotalPrice]=useState(selectedSeats.length*price[0] + selectedDoubleSeats.length*price[1])
  const handleBookingBtn = async() => {
   // setBookedSeats([])
    console.log("dounle",bookedseats)
   
  
    console.log("dounle 2",bookedseats)
      setTotalPrice(selectedSeats.length*price[0] + selectedDoubleSeats.length*price[1])
      const newReservation ={
        userId: userId,
        showtimeId: showtimeId,
        seats: bookedseats,
        totalPrice: totalPrice
      }
      console.log(newReservation)
      console.log("dounle 3",bookedseats)
 
    const res1 = screenAPI.createReservation(userId, newReservation, user?.token)
      setTimeout(async () => {
        const res2 = screenAPI.bookReservation((await res1).data._id, user?.token)
        console.log("dounle 4",bookedseats)
        const reserv= (await res1).data._id
        console.log("re", reserv)
        setreser(reserv)
        setNoti((await res2).data.message)
        setModalOpen(true)
        setSelectedDoubleSeats([])
        setSelectedSeats([])
        setTotalPrice(0)
        setBookedSeats([])
        console.log("dounle 5",bookedseats)
      }, 10);
  
  }
  const handleBackBtn=async ()=>{
    const res = await screenAPI.deleteBookedSeat(user?.token,bookedseats[0])
    setBookedSeats([])
    setIsChoosingSeat(1)
  }
  const handleNextBtn = async()=>{
    setIsChoosingSeat(0);
    setBookedSeats([])
    console.log("dounle",bookedseats)
    if (selectedDoubleSeats.length!==0||selectedSeats.length!==0){
      const res  = await setBookedSeatss(screenInfo._id, selectedSeats.concat(selectedDoubleSeats))
    }
    console.log("dounle",selectedDoubleSeats)
  
    console.log("dounle 2",bookedseats)
  }
  return (
    <div className=''>
    {
      isChoosingSeat?(
        <div className={styles.body}>
        <div className={styles.movie_container}>
          <div className={styles.container}>
            {seatArr.map((row, indexrow) => (
              <div key={row}>
                <div className={styles.row}>
                  {row.map((seat:any, index:number) => (
                    <div
                      key={seat}
                      className={`${
                        indexrow !== seatArr.length-1
                          ? `${styles.seat} ${
                              index === 1 ? styles['margin-right'] : ''
                            } ${
                              index === row.length - 2
                                ? styles['margin-left']
                                : ''
                            }`
                          : ''
                      } ${
                        indexrow === seatArr.length-1
                          ? `${styles.doubleSeat} ${
                              index === 0 ? styles['margin-right'] : ''
                            } ${
                              index === row.length - 1
                                ? styles['margin-left']
                                : ''
                            }`
                          : ''
                      } ${seat===0 ? '' : styles.occupied} ${
                        selectedSeats.some(arr => arr.toString()===([indexrow,index]).toString()) ||selectedDoubleSeats.some(arr => arr.toString()===([indexrow,index]).toString())  ? styles.selected : ''
                      }`}
                      onClick={() => handleSeatClick([indexrow, index])}
                    ></div>
                  ))}
                </div>
              </div>
            ))}
            <p className={styles.text}>
              Số lượng ghế đơn là{' '}
              <span id="count">
                {selectedSeats.length}
              </span>
            </p>

            <p className={styles.text}>
              Số lượng ghế đôi là{' '}
              <span id="countdouble">
                {selectedDoubleSeats.length}
              </span>
            </p>
            <p className={styles.text}>
              Vị trí ghế là{' '}
              <span id="address">
                {selectedSeats.map((seatId) => {
                  const seat = seatArr.find((seat) => seat[0] === seatId[0] && seat[1] ===seatId[1]);
                    
                    return `${convert2Alphabet(seatId)[0]}${convert2Alphabet(seatId)[1]}`;

                }).join(', ')}, 
                 {selectedDoubleSeats.map((seatId) => {
                  const seat = seatArr.find((seat) => seat[0] === seatId[0] && seat[1] ===seatId[1]);
                    
                    return `${convert2Alphabet(seatId)[0]}${convert2Alphabet(seatId)[1]}`;

                }).join(', ')}
              </span>
            </p>
          </div>

          <button className={styles.ripple} onClick={()=>{handleNextBtn()}}>
            Tiếp theo
          </button>
        </div>
      </div>
      ):(
        <>
         <div className={styles.lay1}>
            <div className={styles.lay2}> 
                <div className={styles.content}>
                    <h5 className={styles.content1}>Loại vé</h5>
                    <h5 className={styles.content2}>Số lượng</h5>
                    <h5 className={styles.content2}>Giá (VNĐ)</h5>  
                    <h5 className={styles.content2}>Tổng (VNĐ)</h5>
                </div>
                <div className={styles.ticketBox}>
                <div className={styles.opt}>    
                        <h5 className={styles.content1}>Người lớn<br/><sup><small>2D</small></sup></h5>
                        <div  className={styles.inputNum}   >{selectedSeats.length}</div>
                        <div className={styles.price}  >{price[0]}</div>
                        <div  className={styles.outputNum}    > {selectedSeats.length*price[0]}</div>
                    </div>
                    <div className={styles.opt}>    
                        <h5 className={styles.content1}>Người lớn<br/><sup><small>3D</small></sup></h5>
                        <div className={styles.inputNum}    >0</div>
                        <div className={styles.price}   >{price[1]}</div>
                        <div   className={styles.outputNum}    >0</div>
                    </div>
                    <div className={styles.opt}>    
                        <h5 className={styles.content1}>Người lớn<br/><sup><small>2D-bao gồm 2 vé</small></sup></h5>
                        <div className={styles.inputNum}   >{selectedDoubleSeats.length}</div>
                        <div className={styles.price}  >{price[1]}</div>
                        <div   className={styles.outputNum}    >{selectedDoubleSeats.length*price[1]}</div>
                    </div>


                </div>

                <div className={styles.content}>
                    <h5 className={styles.content1}>Bắp/Nước</h5>
                    <h5 className={styles.content2}>Số lượng</h5>
                    <h5 className={styles.content2}>Giá (VNĐ)</h5>
                    <h5 className={styles.content2}>Tổng (VNĐ)</h5>
                </div>
                <div className={styles.food}>
                    <div className={styles.optFood}>
                        <div className={styles.content3} >
                         <Image src={food3} alt=""/>
                        <h5>Combo 1 Big Extra<br/><sup><small>1 Ly nước ngọt size L + 01 Hộp bắp</small></sup></h5>
                        </div>
                        <div className={styles.content4}>
                          <div   className={styles.divNum}   defaultValue={0}/>
                          <div  className={styles.price}   defaultValue={50000} />
                          <div    className={styles.outputNum}    />
                        </div>
                    
                </div>

                <div className={styles.optFood}>
                        <div className={styles.content3} >
                         <Image src={food1} alt=""/>
                        <h5>Combo 1 Big Extra<br/><sup><small>1 Ly nước ngọt size L + 01 Hộp bắp + 1 Snack </small></sup></h5>
                        </div>
                        <div className={styles.content4}>
                          <div   className={styles.divNum}    defaultValue={0}/>
                          <div  className={styles.price}   defaultValue={90000} />
                          <div   className={styles.outputNum}    />
                        </div>
                    
                </div>

                <div className={styles.optFood}>
                        <div className={styles.content3} >
                         <Image src={food4} alt=""/>
                        <h5>Combo 1 Big Extra<br/><sup><small>2 Ly nước ngọt size L + 01 Hộp bắp</small></sup></h5>
                        </div>
                        <div className={styles.content4}>
                          <div className={styles.divNum}     defaultValue={0}/>
                          <div  className={styles.price}   defaultValue={price[1]} />
                          <div   className={styles.outputNum}    />
                        </div>
                    
                </div>

                <div className={styles.optFood}>
                        <div className={styles.content3} >
                         <Image src={food2} alt=""/>
                        <h5>Combo 1 Big Extra<br/><sup><small>2 Ly nước ngọt size L + 01 Hộp bắp + 1 Snack</small></sup></h5>
                        </div>
                        <div className={styles.content4}>
                          <div   className={styles.divNum}     defaultValue={0}/>
                          <div  className={styles.price}   defaultValue={100000} />
                          <div   className={styles.outputNum}    />
                        </div>
                    
                </div>

                </div>


            </div>
            <div className={styles.mvDetails}>
                <Image src={showtime?.movie?.image} alt='dd' width={100} height={250}></Image>
                <h5>Tên: {showtime?.movie?.title}</h5>
                <h5>Rạp : {theatreName}</h5>
                <h5>Suất chiếu : {time}</h5>    
                <div className={styles.cost}>
                  <h5>Tổng: {totalPrice} </h5>
                  {/* <div      defaultValue={0} /> */}
          
                </div>
                {/* <button className={styles.ripple} onClick={()=> setIsChoosingSeat(1)}>QUAY LẠI</button>
                <button onClick={()=> handleBookingBtn()}>THANH TOÁN</button>
               */}
            </div>
            <div className={styles.mvDetails1}>
            <div className={styles.input}> 
                <select className={styles.username}>
                  {banks.map((e)=>
                  <option key={e}>({e.bin}) - {e.shortName}</option>)}
                </select>
       
                <input type="text" id ='password' onChange={(e)=>setBankAccount(e.target.value)} placeholder='Số tài khoản' className={styles.username} />
                {vietnamBankAccountPattern.test(bankAccountNumber)?(<p>
                Số tài khoản hợp lệ!</p>):(<h6>Số tài khoản không hơp lệ!
                </h6>)}
            </div>
               
                <button className={styles.ripple} onClick={()=> handleBackBtn()}>QUAY LẠI</button>
                  {/* <button onClick={()=> handlecreatebtn()}>taoj cr</button> */}
                <button onClick={()=> handleBookingBtn()}>THANH TOÁN</button>
              
            </div>
        </div> 
        </>
      )
      
    }
   
      <PopupResult message={noti} button={["Về trang chủ", "Xem lại vé"]} urls={["/", `/User/reservation/${reser}`]}
      modalOpen={modelOpen} setModalOpen={setModalOpen}  />
 
       
     

      
    </div>
  );
}
