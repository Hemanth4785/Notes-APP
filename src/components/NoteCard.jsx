function NoteCard({ title, content, onDelete, onEdit }) {
  return (
    <div className="bg-[#1f1f23] border border-[#2a2a2c] rounded-lg p-6 flex flex-col justify-center items-center min-h-40 text-center cursor-pointer transition-all duration-200 hover:bg-[#28282c] hover:-translate-y-0.5 group">
      
      {/* Explicitly forced text-white for the title */}
      <h4 className="text-lg font-semibold tracking-wider uppercase text-white block mb-2">
        {title || "Untitled Note"}
      </h4>
      
      {/* Explicitly forced text-gray-200 and removed 'hidden' so it displays */}
      <pre className="text-sm text-gray-200 whitespace-pre-wrap font-mono block bg-[#16161a] p-3 rounded border border-[#2a2a2c] w-full max-h-40 overflow-y-auto text-left">
        {content || "No code submitted"}
      </pre> 
      
      <div className="mt-4 flex gap-3 opacity-60 group-hover:opacity-100 transition-opacity">
        <button onClick={onEdit} className="text-sm bg-[#2a2a30] text-white px-3 py-1 rounded hover:bg-[#3a3a42]">
          Edit
        </button>
        <button onClick={onDelete} className="text-sm bg-red-950/40 text-red-400 px-3 py-1 rounded hover:bg-red-900/60">
          Delete
        </button>
      </div>
    </div>
  );
}

export default NoteCard;