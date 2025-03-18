import React, { useState, useEffect } from "react";
import { Note } from "../types";

interface Props {
  onSave: (note: Note) => void;
  editingNote: Note | null;
}

const NoteForm: React.FC<Props> = ({ onSave, editingNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [editingNote]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    onSave({ id: editingNote ? editingNote.id : Date.now(), title, content });
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="form-control mb-2"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        {editingNote ? "Update Note" : "Add Note"}
      </button>
    </form>
  );
};

export default NoteForm;
