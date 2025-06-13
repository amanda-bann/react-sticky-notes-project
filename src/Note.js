import React from 'react';

// The Note component is a functional component that renders a single note.
// It takes props, which can include note data, and displays an input for the title,
// a textarea for the description, and a delete button.
const Note = (props) => {

    const updateTitle = (e) => {
        const updatedValue = e.target.value;
        const editMeId =props.note.id;
        props.onType(editMeId, "title", updatedValue)
    };

    const updateDescription = (e) => {
        const updatedValue = e.target.value;
        const editMeId =props.note.id;
        props.onType(editMeId, "description", updatedValue)
    };

    return (
        <li className="note">
            {/* {console.log(props.note)} */}
            <input 
                className="note__title"
                type="text"
                placeholder="Title"
                value={props.note.title}
                onChange={updateTitle}
            />
            <textarea 
                className="note__description"
                placeholder="Description..."
                value={props.note.description}
                onChange={updateDescription}
            />
            <span className="note__delete">X</span>
        </li>
    );
};

export default Note;
// This code defines a Note component for a sticky notes application.