import { useState } from 'react'
import NoteForm from './components/NoteForm';
import Navbar from './components/Navbar';
import NoteList from './components/NoteList';
function App() {
  const [notes,setNotes]=useState([]);
  function addNote(note){
    console.log(note)
    setNotes([...notes,note]);
  }
     function deleteNote(indexToDelete){
    const updatedNotes=notes.filter((note,index)=> index!== indexToDelete);
    setNotes(updatedNotes)
  }
    return (
    <div>
      <Navbar />
      <NoteForm addNote={addNote} />
      <NoteList notes={notes}
      deleteNote={deleteNote}/>
    </div>
  );

 
}

export default App;
