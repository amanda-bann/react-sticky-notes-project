import React from "react";
import Note from "./Note";


// The NotesList component is a functional component that renders a list of notes.
// It takes a prop `notes`, which is an array of note objects, and maps over them to create a list of Note components.
// Each Note component is passed a single note object as a prop, and the key for each list item is set to the note's id.


const NotesList = (props) => {
  // Filter notes to keep only those that match the search criteria
  // In this case, it filters notes based on the `doesMatchSearch` property which is written as a boolean.
  const keepSearchMatches = (note) => note.doesMatchSearch;
  const searchMatches = props.notes.filter(keepSearchMatches);

  const renderNote = (note) => <Note note={note} key={note.id}/>;
  const noteElements = searchMatches.map(renderNote);
  return <ul className="notes-list">{noteElements}</ul>;
};


export default NotesList;
// This code defines a NotesList component for a sticky notes application.