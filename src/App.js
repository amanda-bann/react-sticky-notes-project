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
    searchText: "search"
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

  render () {
    return (
      <div>
        <Header addNote={this.addNote} searchText={this.state.searchText} />
        <NotesList notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
