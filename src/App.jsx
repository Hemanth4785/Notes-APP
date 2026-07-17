import { useState } from 'react';
import NoteForm from './components/NoteForm';
import Navbar from './components/Navbar';
import NoteList from './components/NoteList';

function App() {
  const [notes, setNotes] = useState([]);
  const [editNote, setEditNote] = useState(null); // 1. Holds the note being edited

  function addNote(note) {
    console.log(note);
    setNotes([...notes, note]);
  }

  function deleteNote(indexToDelete) {
    const updatedNotes = notes.filter((note, index) => index !== indexToDelete);
    setNotes(updatedNotes);
  }

  // 2. Replaces the old note with the edited note at its specific index
  function updateNote(updatedNote) {
    const updatedNotes = notes.map((note, index) => 
      index === editNote.index ? updatedNote : note
    );
    setNotes(updatedNotes);
    setEditNote(null); // Clear edit mode after updating
  }

  // 3. Captures the note details and its position when the Edit button is clicked
  function handleEditClick(note, index) {
    setEditNote({ ...note, index });
  }

  return (
  <div className="min-h-screen text-white flex flex-col items-center gap-8 px-4 py-10 max-w-4xl mx-auto">
    <Navbar />
    <NoteForm addNote={addNote} editNote={editNote} updateNote={updateNote} />
    <NoteList notes={notes} deleteNote={deleteNote} onEditClick={handleEditClick} />
  </div>
); 
}

export default App;