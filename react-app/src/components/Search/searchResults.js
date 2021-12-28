import React from 'react';
import { useSelector } from 'react-redux';
import ProjectCard from '../ProjectPages/ProjectCard';
import './search.css'

const SearchResults = () => {
  const results = useSelector((state) => state.search_results);

  return (
    <div className="search-result-container">
      <h1>Search Results:</h1>
      {results.length === 0
        ? `Search our archive of projects!`
        : null}
      <div className="card-container">
        {results.map((project) => (
          <ProjectCard project={project}  />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
