import NoteCard from "./NoteCard";

function NoteList({ notes,deleteNote }) {

  return (

    <div>

      <h2>My Notes</h2>

      {notes.map((note, index) => (
        <NoteCard
          key={index}
          title={note.title}
          content={note.content}
          delteNote={deleteNote}
          index={index}
        />
      ))}

    </div>

  );
}

export default NoteList;