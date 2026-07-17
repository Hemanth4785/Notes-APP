import NoteCard from './NoteCard';

function NoteList({ notes, deleteNote, onEditClick }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-5 w-full mt-5">
      {notes.map((note, index) => (
        <NoteCard 
          key={index} 
          title={note.title}          
          content={note.content}      
          onDelete={() => deleteNote(index)} 
          onEdit={() => onEditClick(note, index)} 
        />
      ))}
    </div>
  );
}

export default NoteList;