import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";
function NotesList({ notes, handleAddNote, handleDeleteNote }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          key={note.id}
          handleDeleteNote={handleDeleteNote}
          id={note.id}
          text={note.text}
          date={note.date}
        />
      ))}

      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
}

export default NotesList;
