import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import NoteList from "./components/NoteList";
import AddNote from "./components/AddNote";
import 'bootstrap/dist/css/bootstrap.min.css';  // Importing Bootstrap CSS

const App = () => {
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        // Fetch notes from the server
        axios
            .get("https://notes-backend-4v79.onrender.com/api/notes")
            .then((response) => setNotes(response.data))
            .catch((error) => console.error("Error fetching notes:", error));
    }, []);

    const handleAddNote = () => {
        // Add a new note to the server
        axios
            .post("https://notes-backend-4v79.onrender.com/api/notes", { title, content })
            .then((response) => {
                setNotes([...notes, response.data]);
                setTitle("");
                setContent("");
            })
            .catch((error) => console.error("Error adding note:", error));
    };

    const handleEditNote = (id, updatedTitle, updatedContent) => {
        // Update note by ID
        axios
            .put(`https://notes-backend-4v79.onrender.com/api/notes/${id}`, {
                title: updatedTitle,
                content: updatedContent,
            })
            .then((response) => {
                const updatedNotes = notes.map((note) =>
                    note._id === id ? response.data : note
                );
                setNotes(updatedNotes);
            })
            .catch((error) => console.error("Error updating note:", error));
    };

    const handleDeleteNote = (id) => {
        // Delete note by ID
        axios
            .delete(`https://notes-backend-4v79.onrender.com/api/notes/${id}`)
            .then((response) => {
                const updatedNotes = notes.filter((note) => note._id !== id);
                setNotes(updatedNotes);
            })
            .catch((error) => console.error("Error deleting note:", error));
    };

    return (
      
        <div className="container mt-5" style={{
          backgroundImage: "url('https://images.pexels.com/photos/730706/pexels-photo-730706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", 
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          height: "100vh"
        }}>
            <h1 className="text-center mb-4 text-info">Notes App</h1>

            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-10">
                    {/* AddNote Component */}
                    <AddNote
                        title={title}
                        setTitle={setTitle}
                        content={content}
                        setContent={setContent}
                        onAddNote={handleAddNote}
                    />
                </div>
            </div>

            <div className="row mt-4 ">
                <div className="d-flex gap-2 justify-content-center mx-auto mt-3">
                    {/* NoteList Component */}
                    <NoteList
                        notes={notes}
                        onEditNote={handleEditNote}
                        onDeleteNote={handleDeleteNote}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;