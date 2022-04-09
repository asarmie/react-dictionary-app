import React, { useState } from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
  let [searchedWord, setSearchedWord] = useState(null);

  function handleSearch(event) {
    event.preventDefault();
    alert(`${searchedWord}`);
  }

  function handleSearchedWordChange(event) {
    event.preventDefault();
    setSearchedWord(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          onChange={handleSearchedWordChange}
          type="search"
          placeholder="Type word here"
          auofocuse="on"
          className="form-control-md p-2 m-2"
        ></input>
        <input
          type="submit"
          placeholder="Enter"
          className=" button btn btn-primary"
        ></input>
      </form>
    </div>
  );
}
