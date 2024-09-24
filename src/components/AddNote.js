import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const AddNote = ({ title, setTitle, content, setContent, onAddNote }) => {
    return (
        <div>
            <div className="row p-3 bg-info text-light text-lg-center mt-2" >
                <h1>add item</h1>
            </div>
            <div className="form-group d-flex gap-2 mt-4">
                <input
                    type="text" class="form-control" aria-label="Text input with checkbox"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
            </div>

            <div className="d-flex gap-2 justify-content-center mx-auto mt-3">
                <button className="btn btn-success" onClick={onAddNote}>
                    Add Notes
                </button>
            </div>

        </div>
    );
};

export default AddNote;