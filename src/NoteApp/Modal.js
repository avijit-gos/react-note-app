import React,{useState} from 'react'

function Modal() {
    const [note, setNote] = useState({ title: "", body: ""});
    
    const changeInput = e => {
        setNote(
            {...note, title: e.target.value},
            {...note, body: e.target.value}
        )
    }
    return (
        <div>
            <form>
               <label>Title</label><br />
               <input type="text" name="title" value={note.title} onChange={changeInput} /><br />

               <label>Body</label><br />
               <textarea type="text" name="body" value={note.body} onChange={changeInput}></textarea><br />
            </form>

            {note.title} {note.body}
        </div>
    )
}

export default Modal
