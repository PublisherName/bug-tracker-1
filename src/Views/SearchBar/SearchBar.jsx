import React, {useState} from 'react';
import './SearchBar.css';

function SearchBar({ onFilterChange, searchText }) {
    const handleFilterChange = (event) => {
        onFilterChange(event.target.name, event.target.value);
    };

    const handleSearchChange = (event) => {
        onFilterChange('searchText', event.target.value);
    };

    return (
        <div className="search-form">
            <div>
                <label htmlFor="status">Status:</label>
                <select id="status" name="status" className="search-dropdown" onChange={handleFilterChange}>
                    <option value="all">All</option>
                    <option value="open">Open</option>
                    <option value="closed">Closed</option>
                </select>

                <label htmlFor="priority">Priority:</label>
                <select id="priority" name="priority" className="search-dropdown" onChange={handleFilterChange}>
                    <option value="all">All</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>

            <input type="text" id="searchText" className="search-input" placeholder="Search..." value={searchText} onChange={handleSearchChange} />
        </div>
    );
}

export default SearchBar;