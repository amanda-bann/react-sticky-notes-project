import React from "react";

// The Header component is a functional component that renders the header of the application.
const Header = (props) => (
    <header>
      <h1 className="app-header__title">Super Sticky Notes</h1>
      <aside className="app-header__controls">
        <button className="add-new" onClick={props.addNote}> + New Note </button>
        <input 
          className="search"
          type="text"
          placeholder="Type here to search..."
          value={props.searchText}
        />
      </aside>
    </header>
);

export default Header;
// This code defines a Header component for a sticky notes application.