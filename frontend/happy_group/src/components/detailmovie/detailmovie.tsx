import s from './detailmovie.module.css'
import { fbIcon, searchIcon} from '@/assets/svgs'
import Image from 'next/image'
import React from 'react'

export default function detailmovie () {
    return (
    <div className={s.container}>
        <div className={s.head}>
            <div className={s.head1}>Conan Movie 26: Tàu Ngầm Sắt Đen</div>
        </div>
        <br></br>
        <div className={s.box}>
            <img className={s.img} src="https://i.imgur.com/BOR1oFf.png" alt="Mô tả ảnh"/>
            <div className={s.edit}> Edit movie</div>
        </div>
        <br></br>

        <div className={s.name}> Vietnamese Name: </div>
        <br></br>
        <div className={s.name}> International Name: </div>
        <br></br>
        <div className={s.name}> ID:  </div>
        <br></br>
        <div className={s.name1}> Start:  </div>
        <br></br>
        <div className={s.name1}> End:  </div>
        <br></br>
        <div className={s.name}> Genre: </div>
        <br></br>
        <div className={s.name}> Description </div>
        <br></br>
        <div className={s.name}> Lenght: </div>
        <br></br>
        <div className={s.head}>
            <div className={s.head1}>
                All schedules
            </div>
        </div>

        <div className={s.table}>

            <div className={s.col}>
                <div className={s.rowhead}> No. </div>
                <div className={s.row}> 
                    <input type="text" className={s.input1} placeholder=""></input>
                 </div>
                <div className={s.row}> 
                    <input type="text" className={s.input1} placeholder=""></input>
                </div>
                <div className={s.row}> 
                    <input type="text" className={s.input1} placeholder=""></input>
                 </div>
                <div className={s.row}> 
                    <input type="text" className={s.input1} placeholder=""></input>
                 </div>
                <div className={s.row}> 
                <input type="text" className={s.input1} placeholder=""></input>
                 </div>
            </div>


            <div className={s.col}> 
                <div className={s.rowhead}> Name </div>
                <div className={s.row}> 
                    <input type="text" className={s.input2} placeholder=""></input>
                 </div>
                <div className={s.row}> 
                    <input type="text" className={s.input2} placeholder=""></input>
                </div>
                <div className={s.row}> 
                    <input type="text" className={s.input2} placeholder=""></input>
                 </div>
                <div className={s.row}> 
                    <input type="text" className={s.input2} placeholder=""></input>
                 </div>
                <div className={s.row}> 
                <input type="text" className={s.input2} placeholder=""></input>
                 </div>
            </div>


            <div className={s.col}> 
                <div className={s.rowhead}> Cinesta </div>
                <div className={s.row}> 
                    <input type="text" className={s.input3} placeholder=""></input>
                 </div>
                <div className={s.row}> 
                    <input type="text" className={s.input3} placeholder=""></input>
                </div>
                <div className={s.row}> 
                    <input type="text" className={s.input3} placeholder=""></input>
                 </div>
                <div className={s.row}> 
                    <input type="text" className={s.input3} placeholder=""></input>
                 </div>
                <div className={s.row}> 
                <input type="text" className={s.input3} placeholder=""></input>
                 </div>
            </div>


            <div className={s.col}> 
                <div className={s.rowhead}> Room </div>
                <div className={s.row}> 
                    <input type="text" className={s.input4} placeholder=""></input>
                 </div>
                <div className={s.row}> 
                    <input type="text" className={s.input4} placeholder=""></input>
                </div>
                <div className={s.row}> 
                    <input type="text" className={s.input4} placeholder=""></input>
                 </div>
                <div className={s.row}> 
                    <input type="text" className={s.input4} placeholder=""></input>
                 </div>
                <div className={s.row}> 
                <input type="text" className={s.input4} placeholder=""></input>
                 </div>
            </div>

            <div className={s.col}> 
                <div className={s.rowhead}> Date </div>
                <div className={s.row}> 
                    <input type="text" className={s.input5} placeholder=""></input>
                 </div>
                <div className={s.row}> 
                    <input type="text" className={s.input5} placeholder=""></input>
                </div>
                <div className={s.row}> 
                    <input type="text" className={s.input5} placeholder=""></input>
                 </div>
                <div className={s.row}> 
                    <input type="text" className={s.input5} placeholder=""></input>
                 </div>
                <div className={s.row}> 
                    <input type="text" className={s.input5} placeholder=""></input>
                 </div>
            </div>


            <div className={s.col}> 
                <div className={s.rowhead}> Start </div>
                <div className={s.row}> 
                    <input type="text" className={s.input5} placeholder=""></input>
                 </div>
                <div className={s.row}> 
                    <input type="text" className={s.input5} placeholder=""></input>
                </div>
                <div className={s.row}> 
                    <input type="text" className={s.input5} placeholder=""></input>
                 </div>
                <div className={s.row}> 
                    <input type="text" className={s.input5} placeholder=""></input>
                 </div>
                <div className={s.row}> 
                <input type="text" className={s.input5} placeholder=""></input>
                 </div>
            </div>            


            <div className={s.col}> 
                <div className={s.rowhead}> End </div>
                <div className={s.row}> 
                    <input type="text" className={s.input5} placeholder=""></input>
                 </div>
                <div className={s.row}> 
                    <input type="text" className={s.input5} placeholder=""></input>
                </div>
                <div className={s.row}> 
                    <input type="text" className={s.input5} placeholder=""></input>
                 </div>
                <div className={s.row}> 
                    <input type="text" className={s.input5} placeholder=""></input>
                 </div>
                <div className={s.row}> 
                <input type="text" className={s.input5} placeholder=""></input>
                 </div>
            </div>
        </div>

        <br></br>
        <div className={s.box}>
            <img className={s.img} src="https://i.imgur.com/BOR1oFf.png" alt="Mô tả ảnh"/>
            <div className={s.edit}>Add schedules</div>
        </div>
        <br></br>


        <div className={s.table}>

            <div className={s.col}>
                <div className={s.rowhead}> No. </div>
                <div className={s.row}> 
                    <input type="text" className={s.input1} placeholder=""></input>
                </div>
                <div className={s.row}> 
                    <input type="text" className={s.input1} placeholder=""></input>
                </div>
                <div className={s.row}> 
                    <input type="text" className={s.input1} placeholder=""></input>
                </div>
            </div>


            <div className={s.col}> 
                <div className={s.rowhead}> Name </div>
                <div className={s.row}> 
                    <input type="text" className={s.input2} placeholder=""></input>
                </div>
                <div className={s.row}> 
                    <input type="text" className={s.input2} placeholder=""></input>
                </div>
                <div className={s.row}> 
                    <input type="text" className={s.input2} placeholder=""></input>
                </div>
            </div>


            <div className={s.col}> 
                <div className={s.rowhead}> Cinesta </div>
                <div className={s.row}> 
                    <input type="text" className={s.input3} placeholder=""></input>
                </div>
                <div className={s.row}> 
                    <input type="text" className={s.input3} placeholder=""></input>
                </div>
                <div className={s.row}> 
                    <input type="text" className={s.input3} placeholder=""></input>
                </div>
            </div>


            <div className={s.col}> 
                <div className={s.rowhead}> Room </div>
                <div className={s.row}> 
                    <input type="text" className={s.input4} placeholder=""></input>
                </div>
                <div className={s.row}> 
                    <input type="text" className={s.input4} placeholder=""></input>
                </div>
                <div className={s.row}> 
                    <input type="text" className={s.input4} placeholder=""></input>
                </div>
            </div>

            <div className={s.col}> 
                <div className={s.rowhead}> Date </div>
                <div className={s.row}> 
                    <input type="text" className={s.input5} placeholder=""></input>
                </div>
                <div className={s.row}> 
                    <input type="text" className={s.input5} placeholder=""></input>
                </div>
                <div className={s.row}> 
                    <input type="text" className={s.input5} placeholder=""></input>
                </div>
            </div>


            <div className={s.col}> 
                <div className={s.rowhead}> Start </div>
                <div className={s.row}> 
                    <input type="text" className={s.input5} placeholder=""></input>
                </div>
                <div className={s.row}> 
                    <input type="text" className={s.input5} placeholder=""></input>
                </div>
                <div className={s.row}> 
                    <input type="text" className={s.input5} placeholder=""></input>
                </div>
                
            </div>            

            <div className={s.col}> 
                <div className={s.rowhead}> End </div>
                <div className={s.row}> 
                    <input type="text" className={s.input5} placeholder=""></input>
                </div>
                <div className={s.row}> 
                    <input type="text" className={s.input5} placeholder=""></input>
                </div>
                <div className={s.row}> 
                    <input type="text" className={s.input5} placeholder=""></input>
                </div>
            </div>
        </div>

        <br></br>
        <div className={s.box}>
            <img className={s.img} src="https://i.imgur.com/rENePWy.png" alt="Mô tả ảnh"/>
            <div className={s.edit}>Save</div>
        </div>
        <br></br>

    </div>
    );
}