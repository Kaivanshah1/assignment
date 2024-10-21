import React, { useState } from "react";
import WatchList from "./WatchList";

const Search = () => {
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="enter company" />
        <button type="submit">Submit</button>
      </form>
      <WatchList />
    </div>
  );
};

export default Search;
