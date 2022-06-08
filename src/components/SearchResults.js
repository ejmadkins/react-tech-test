import React from "react";
import "../styles/search-results.css";

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p className="no-results">No results.</p>;
  } else {
    return (
      <div className="search-results">
        <div className="search-result-cards">
          {results.map((image) => (
            <img
              className="search-result-card"
              src={image}
              alt="searchResult"
            />
          ))}
        </div>
      </div>
    );
  }
};

export default SearchResults;
