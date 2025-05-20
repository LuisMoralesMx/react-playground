'use client';

import { useState } from 'react';

export default function Notes() {
  const [note, setNote] = useState<string>('');
  const [notesList, setNotesList] = useState<string[]>([]);

  const handleAddNote = () => {
    if (note.trim() !== '') {
      setNotesList((prevNotes) => [...prevNotes, note]);
      setNote('');
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center p-4 mt-5">
        <h1 className="text-3xl font-bold">Notes</h1>
        <p className="mt-2 text-lg">Feel free to explore and add your own notes!</p>

        <div className="mt-4">
          <input
            className="border border-gray-300 rounded p-2"
            id="noteId"
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          ></input>
          <button className="ml-2 bg-blue-500 text-white rounded p-2" onClick={handleAddNote}>
            Add Note
          </button>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold">Notes List</h2>
          {notesList.length > 0 && (
            <ul className="mt-4">
              {notesList.map((note, index) => (
                <li key={index} className="border-b border-gray-300 py-2">
                  {note}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
