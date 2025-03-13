import React, { useState } from "react";
import NotesList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import { Note } from "./types";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [editingNote, setEditingNote] = useState<Note | null>(null);
  const [search, setSearch] = useState("");

  const handleSave = (note: Note) => {
    if (editingNote) {
      setNotes(notes.map((n) => (n.id === note.id ? note : n)));
      setEditingNote(null);
    } else {
      setNotes([...notes, note]);
    }
  };

  const handleDelete = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleEdit = (note: Note) => {
    setEditingNote(note);
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <div className="sidebar">
        <h3>Notes</h3>
        <input
          type="text"
          className="form-control search-bar mb-3"
          placeholder="Search notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <NotesList notes={filteredNotes} onDelete={handleDelete} onEdit={handleEdit} />
      </div>
      <div className="notes-content">
        <NoteForm onSave={handleSave} editingNote={editingNote} />
      </div>
    </div>
  );
};

export default App;
