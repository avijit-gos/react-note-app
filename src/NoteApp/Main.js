import React, { useState } from 'react';
import NoteBox from './noteBox';
import './style.css';

function Main() {
    const [note, setNote] = useState({title: '', body: ''});
    const [items, setItems] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        setItems([...items, note]);
        setNote({ title: '', body: ''});
    };

    const onDelete = (id) => {
        setItems((oldData) =>
           oldData.filter((currentData, indx)=>{
               return indx !== id;
           })
        )
    };

    
    
    return(
        <div className="main">
        <p className="text-header">create your own notebook</p>
           <div className="input-box">
              <form onSubmit={handleSubmit}>
                 <label className="text">Title</label><br />
                 <input type="text" className="title-input" value={note.title} onChange={(e)=> setNote({...note, title: e.target.value})} /><br />

                 <label className="text">Body</label><br />
                 <textarea type="text" className="title-body" value={note.body} onChange={(e)=> setNote({...note, body: e.target.value})}></textarea><br />
                 <div className="input-btn">
                 <button type="submit" className="btn">Save</button>
                 </div>
              </form>
           </div>
           {
               items.map((item, index) => {
                   return (
                       <NoteBox key={index} deleteItem={onDelete} id={index} body={item.body} title={item.title} />
                   )
               })
           }
        </div>
    )
}

export default Main;