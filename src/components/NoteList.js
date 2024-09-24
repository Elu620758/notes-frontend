import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const NoteList = ({ notes, onEditNote, onDeleteNote }) => {
    return (
        <ul className="gap-2 mt-3">
            {notes.map((note) => (
                <li key={note._id}>
                    <strong>{note.title}</strong>
                    <p>{note.content}</p>
                    <div className="d-flex gap-2">
                        <button
                            className="btn btn-warning"
                            style={{ marginRight: "15px" }}
                            onClick={() =>
                                onEditNote(
                                    note._id,
                                    prompt("Enter updated title:", note.title),
                                    prompt("Enter updated content:", note.content)
                                )
                            }
                        >
                            Edit
                        </button>
                        <button
                            className="btn btn-danger"
                            onClick={() => onDeleteNote(note._id)}
                        >
                            Delete
                        </button>
                    </div>


                </li>
            ))}
        </ul>
    );
};

export default NoteList;