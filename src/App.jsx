import { useState, useEffect } from "react";
import NoteForm from "./components/NoteForm";
import Navbar from "./components/Navbar";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);
  const [editNote, setEditNote] = useState(null);

  // GET - Load notes from PostgreSQL through Express
  useEffect(() => {
    async function getNotes() {
      try {
        const response = await fetch("http://localhost:5000/notes");
        const data = await response.json();

        setNotes(data);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    }

    getNotes();
  }, []);

  // POST - Add a new note
  async function addNote(note) {
    try {
      const response = await fetch("http://localhost:5000/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
      });

      const newNote = await response.json();

      setNotes((prevNotes) => [...prevNotes, newNote]);
    } catch (error) {
      console.error("Error adding note:", error);
    }
  }

  // DELETE - Delete note
  async function deleteNote(indexToDelete) {
    try {
      // Get the database ID using the clicked index
      const noteToDelete = notes[indexToDelete];

      await fetch(
        `http://localhost:5000/notes/${noteToDelete.id}`,
        {
          method: "DELETE",
        }
      );

      setNotes((prevNotes) =>
        prevNotes.filter((note) => note.id !== noteToDelete.id)
      );
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  }

  // PUT - Update existing note
  async function updateNote(updatedNote) {
    try {
      const noteToEdit = notes[editNote.index];

      const response = await fetch(
        `http://localhost:5000/notes/${noteToEdit.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedNote),
        }
      );

      const savedNote = await response.json();

      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note.id === noteToEdit.id ? savedNote : note
        )
      );

      setEditNote(null);
    } catch (error) {
      console.error("Error updating note:", error);
    }
  }

  // User clicked Edit
  function handleEditClick(note, index) {
    setEditNote({
      ...note,
      index,
    });
  }

  return (
    <div className="min-h-screen text-white flex flex-col items-center gap-8 px-4 py-10 max-w-4xl mx-auto">
      <Navbar />

      <NoteForm
        addNote={addNote}
        editNote={editNote}
        updateNote={updateNote}
      />

      <NoteList
        notes={notes}
        deleteNote={deleteNote}
        onEditClick={handleEditClick}
      />
    </div>
  );
}

export default App;