import React from "react";
import { Note } from "../types";

interface Props {
  note: Note;
  onDelete: (id: number) => void;
  onEdit: (note: Note) => void;
}

const MAX_LENGTH = 100;

const NoteItem: React.FC<Props> = ({ note, onDelete, onEdit }) => {
  const previewText =
    note.content.length > MAX_LENGTH
      ? note.content.slice(0, MAX_LENGTH) + "..."
      : note.content;

  return (
    <div className="card mb-2 note-card">
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text note-preview">{previewText}</p>
        <button className="btn btn-warning btn-sm me-2" onClick={() => onEdit(note)}>
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={() => onDelete(note.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteItem;
