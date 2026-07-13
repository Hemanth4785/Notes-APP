function NoteCard({title,content,delteNote,index}){
    return(
        <div
        style={{
            border:"1px solid gray",
            padding:"10px",
            margin:"10px 0",
           
        }}>
            <h3>{title}</h3>
            <p>{content}</p>
            <button onClick={()=> delteNote(index)} 
            style={{borderRadius:"6px",padding:"5px",font:"6px"
            }}>Delete</button>

        </div>
    );
}
export default NoteCard;