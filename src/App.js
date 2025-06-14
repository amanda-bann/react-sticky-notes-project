import React, { Component } from "react";
import Header from "./Header";
import NotesList from "./NotesList";

// The App component is the main component of the application.
// It manages the state of the application, including the list of notes and the search text.
class App extends Component {

  state = {
    notes: [
      {
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true,
      }
    ],
    searchText: ""
  };

  addNote = () => {
    // Create a new note
    const newNote = {
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true,
    };
    // Add the new note to the existing notes array in State
    this.setState({ notes: [newNote, ...this.state.notes]});
    // Optionally, you could write it as follows:
    // const newNotes = [newNote, ...this.state.notes];
    // this.setState({ notes: newNotes });
  };

  // The onType function will handle typing in the search input.
  // It will update the searchText state with the value from the input field.
  onType = (editMeId, updatedKey, updatedValue) => {
    // editMeId == id of the note edited
    // updatedKey == title or description
    // updatedValue == value of title or description
    const updatedNotes = this.state.notes.map( note => {
       if (note.id !== editMeId){
          return note;
       } else {
         if (updatedKey === "title"){
          note.title = updatedValue;
          return note;
         } else {
          note.description = updatedValue;
          return note;
         }
       }
      });
      this.setState({ notes: updatedNotes });  
  };

  onSearch = (text) => {
    const newSearchText = text.toLowerCase();
    const updatedNotes = this.state.notes.map( note => {
      if (!newSearchText) {
        note.doesMatchSearch = true;
        return note;
      } else {
        const title = note.title.toLowerCase();
        const description = note.description.toLowerCase();
        const titleMatch = title.includes(newSearchText);
        const descriptionMatch = description.includes(newSearchText);
        const hasMatch = titleMatch || descriptionMatch;
        note.doesMatchSearch = hasMatch;
        // The above two lines can also be written as:
        /* if (titleMatch) {
          note.doesMatchSearch = true;
        } else if (descriptionMatch) {
          note.doesMatchSearch = true;
        } else {
          note.doesMatchSearch = false;
        } */
        return note;
      }
    });
    this.setState({
      notes: updatedNotes,
      searchText: newSearchText
    });
  };

  // The removeNote function will handle the deletion of a note.
  // It will filter out the note with the given noteID from the notes array in State.
  removeNote = (noteID) => {
    const updatedNotes = this.state.notes.filter( note => note.id !== noteID);
    this.setState({ notes: updatedNotes});
  };

  componentDidUpdate() {
    const stringifiedNotes = JSON.stringify(this.state.notes);
    localStorage.setItem("savedNotes", stringifiedNotes);
  };

  componentDidMount() {
    const stringifiedNotes = localStorage.getItem("savedNotes");
    if (stringifiedNotes) {
      const savedNotes = JSON.parse(stringifiedNotes);
      this.setState({ notes: savedNotes });
    };
  };
  

  render () {
    return (
      <div>
        <Header onSearch={this.onSearch} addNote={this.addNote} searchText={this.state.searchText} />
        <NotesList removeNote={this.removeNote} onType={this.onType} notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
