import { useState, useEffect } from 'react';

function NoteForm({ addNote, editNote, updateNote }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // 1. Automatically fill the form when editNote changes
  useEffect(() => {
    if (editNote) {
      setTitle(editNote.title);
      setContent(editNote.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [editNote]); // Runs every time editNote changes

  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !content) return;

    // 2. Decide whether to update or add a new note
    if (editNote) {
      updateNote({ title, content });
    } else {
      addNote({ title, content });
    }

    // Clear form inputs
    setTitle('');
    setContent('');
  }

 return (
  <div className="w-full flex justify-center p-4">
    <form onSubmit={handleSubmit} className="bg-[#121212] border border-solid border-[#1f1f1f] rounded-lg p-8 w-full max-w-125 flex flex-col gap-4 text-left">
      <h3 className="text-xl font-semibold text-white mb-1">
        {editNote ? 'Edit Your Note' : 'Submit Your code'}
      </h3>
      
      <input 
  type="text" 
  placeholder="Title" 
  value={title} 
  onChange={(e) => setTitle(e.target.value)} 
  className="bg-[#161616] rounded-md text-white p-3 text-sm w-full outline-none min-h-11 border border-solid border-[#2a2a2a] focus:border-[#6a6a6a]"
/>

<textarea 
  placeholder="Enter your Content" 
  value={content} 
  onChange={(e) => setContent(e.target.value)} 
  className="bg-[#161616] rounded-md text-white p-3 text-sm w-full outline-none min-h-30 resize-y font-mono border border-solid border-[#2a2a2a] focus:border-[#6a6a6a]"
/>
      
      <button type="submit" className="bg-white border-none rounded-md text-black font-semibold p-3 text-base cursor-pointer hover:bg-[#e0e0e0] transition-colors duration-200 w-full">
        {editNote ? 'Update Note' : 'Submit'}
      </button>
    </form>
  </div>
);
}

export default NoteForm;