import React, {useState} from 'react'
import Modal from 'react-modal';
import { AiOutlineDelete } from "react-icons/ai";

Modal.setAppElement('#root');
function NoteBox(props) {
    const [openModal, setOpenModal] = useState(false)
    const {id,  title, body } = props;
    
    const openModalBtn = () => {
        setOpenModal(true)
    }
    const closeModalBtn = () => {
        setOpenModal(false)
    }
    const deleteNote = () => {
        props.deleteItem(props.id);
    }
    return (
    <div className="note-grandparent" key={id}>
       <div className="note-parent">

            <div className="cont1 child">
                <p className="show-title">{title}</p>
                <button onClick={openModalBtn} className="open">Open</button>
                <button onClick={deleteNote} className="delete"><AiOutlineDelete /></button>
            </div>

            <div className="cont2 child">
               <Modal isOpen={openModal} onRequestClose={()=> setOpenModal(false)}>
                   <p className="modal-title">{title}</p>
                   <p className="modal-body">{body}</p>
                   <button onClick={closeModalBtn} className="close">Close</button>
               </Modal>
            </div>

       </div>
    </div>
    )
}

export default NoteBox;





