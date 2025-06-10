import React, { Component } from "react";
import Header from "./Header";
import NotesList from "./NotesList";

// The App component is the main component of the application.
// It manages the state of the application, including the list of notes and the search text.
class App extends Component {

  state = {
    notes: [
      {
        id: 0,
        title: "eat",
        description: "reese peanut butter cups",
        doesMatchSearch: true
      },
      {
        id: 1,
        title: "sleep",
        description: "eight hours",
        doesMatchSearch: true
      },
      {
        id: 2,
        title: "code",
        description: "build an awesome ui",
        doesMatchSearch: true
      },
      {
        id: 3,
        title: "repeat",
        description: "do it all over again",
        doesMatchSearch: true
      }
    ],
    searchText: "search"
  };
  render () {
    return (
      <div>
        <Header searchText={this.state.searchText} />
        <NotesList notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
