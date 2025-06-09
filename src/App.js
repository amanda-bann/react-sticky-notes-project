import React, { Component } from "react";
import Header from "./Header";
import NotesList from "./NotesList";

/* App component is the main component that holds the state of the application.
   It contains the notes and the search text. It passes the notes and search text
   to the NotesList component, which is responsible for rendering the list of notes.
   The Header component is also rendered here.
*/
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
      }
    ],
    searchText: "search"
  };
  render () {
    return (
      <div>
        <Header />
        <NotesList />
      </div>
    );
  }
};

export default App;
