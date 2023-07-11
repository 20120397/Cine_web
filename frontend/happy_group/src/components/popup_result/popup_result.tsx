/* eslint-disable react/jsx-key */
import router from "next/router";
import { Modal, ModalBody, ModalFooter, Button } from "reactstrap";
import styles from "./popup_result.module.css"
import { useRouter } from "next/navigation";

interface Props {
  modalOpen:boolean, setModalOpen:any, message: string, button:string[], 
  // color:["secondary", "primary", "secondary"], 
  urls :string[]
}
export default function PopupResult (props: Props){
const {message, modalOpen,setModalOpen, urls, button}= props;
const color=["secondary", "primary", "secondary"]
const router= useRouter()
    return (
        // <div className={styles.modal_container} >
        <Modal className={styles.modal}  toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen} >
        <div className={styles.modal_header}>
          <h5 className={styles.modal_title} id="exampleModalLabel">
            {message}
          </h5>
  
        </div>
        <ModalBody>

        </ModalBody>
        <ModalFooter className={styles.footer}>
            {button?.map((btn:string, index:number)=>(
                <button
                    color={color[index]}
                    type="button"
                    onClick={() => {setModalOpen(!modalOpen);router.push(urls[index])}}
                    className={styles.ripple}
                    
                >
                    {btn}
                
                </button> 
                   ))}
        </ModalFooter>
      </Modal>
    //   </div>
    )
}