import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getSearch } from '../../store/search';
import { useHistory } from 'react-router';
import './search.css'

const SearchBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchTerm === '') {
      let term = ' ';
      await dispatch(getSearch(term));
      history.push('/search-results');
    } else {
      await dispatch(getSearch(searchTerm));
      history.push('/search-results');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="search">
        <input
          type="text"
          id="splash-search"
          value={searchTerm}
          placeholder="Find a project..."
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <div className="searchButton">
          <i className="fas fa-search" onClick={handleSubmit}></i>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
