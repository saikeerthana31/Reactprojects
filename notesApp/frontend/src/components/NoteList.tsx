import React from "react";
import { Note } from "../types";
import NoteItem from "./NoteItem";

interface Props {
  notes: Note[];
  onDelete: (id: number) => void;
  onEdit: (note: Note) => void;
}

const NotesList: React.FC<Props> = ({ notes, onDelete, onEdit }) => {
  return (
    <div>
      {notes.length === 0 ? (
        <p className="text-muted">No notes available.</p>
      ) : (
        notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))
      )}
    </div>
  );
};

export default NotesList;
