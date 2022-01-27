import React from 'react';
import { useSelector } from 'react-redux';
import ProjectCard from '../ProjectPages/ProjectCard';
import './search.css'
import SearchBar from './searchBar';

const SearchResults = () => {
  const results = useSelector((state) => state.search_results);

  return (
    <div className="search-result-container">
      <div className='searchPageBar'>
        <SearchBar />
      </div>
      <h1 className='resultsHeader'>Results:</h1>
      {results.length === 0
        ? (<div className='noResults'>Search our archive of projects!</div>)
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
