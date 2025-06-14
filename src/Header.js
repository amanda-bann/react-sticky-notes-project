import React from "react";

// The Header component is a functional component that renders the header of the application.
const Header = (props) => {

  const callSearch = (e) => {
    props.onSearch(e.target.value);
    // The onSearch function is called with the value of the input field.
    // It updates the searchText state in the App component.
    // This will filter the notes based on the search criteria.
  }
  return (
    <header>
      <h1 className="app-header__title">Super Sticky Notes</h1>
      <aside className="app-header__controls">
        <button className="add-new" onClick={props.addNote}> + New Note </button>
        <input 
          className="search"
          type="text"
          placeholder="Type here to search..."
          value={props.searchText}
          onChange={callSearch}
        />
      </aside>
    </header>
  );
};

export default Header;
// This code defines a Header component for a sticky notes application.