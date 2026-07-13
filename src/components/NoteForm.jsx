import {useState} from "react";
function NoteForm({addNote}){
    const [title,setTitle]=useState("");
    const [content,setContent]=useState("");

    function handleSubmit() {
    if (title === "" || content === "") {
        alert("Please fill all the fields");
        return;
    }

    addNote({
        title,
        content,
    });

    setTitle("");
    setContent("");
}
return(
        <div>
            <h2>Add New Note</h2>
            <input type="text" placeholder="Enter title" value={title} onChange={(e)=> setTitle(e.target.value)} />
            <br /><br />
            <textarea  placeholder="Enter the content" value={content} onChange={(e)=>setContent(e.target.value)} />
            <br /><br />
            <button onClick={handleSubmit}>Add Note</button>
        </div>
    );
}
export default NoteForm;