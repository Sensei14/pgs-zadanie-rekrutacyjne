import React from "react";
import "../styles/header.css";

const Header = props => {
  return (
    <div className="header">
      <h2>iTunes api example</h2>

      <form onSubmit={props.handleSearch}>
        <div className="songForm">
          <div>
            <input
              type="text"
              name="searchPhrase"
              value={props.searchPhrase}
              onChange={props.handleChange}
              className="searchField"
              placeholder="Search songs..."
            />
          </div>
          <div>
            <button className="searchButton"> search </button>
          </div>
        </div>
      </form>

      <p>
        Search by song title, author, song number, lyrics, catalog or copyright
        owner
      </p>
    </div>
  );
};

export default Header;
