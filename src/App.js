import React from "react";
import Header from "./Header";

const App = () => (
  <div>
    <Header />
    <ul className="notes-list">
      <li className="note">
        <input className="note__title" type="text" placeholder="Title" />
        <textarea className="note__description" placeholder="Description..." />
        <span className="note__delete">X</span>
      </li>
      <li className="note">
        <input className="note__title" type="text" placeholder="Title" />
        <textarea className="note__description" placeholder="Description..." />
        <span className="note__delete">X</span>
      </li>
      <li className="note">
        <input className="note__title" type="text" placeholder="Title" />
        <textarea className="note__description" placeholder="Description..." />
        <span className="note__delete">X</span>
      </li>
    </ul>
  </div>
);

export default App;
