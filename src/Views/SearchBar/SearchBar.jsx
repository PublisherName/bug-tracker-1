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
                    <option value="Open">Open</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Closed">Closed</option>
                </select>

                <label htmlFor="priority">Priority:</label>
                <select id="priority" name="priority" className="search-dropdown" onChange={handleFilterChange}>
                    <option value="all">All</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>

            <input type="text" id="searchText" className="search-input" placeholder="Search..." value={searchText} onChange={handleSearchChange} />
        </div>
    );
}

export default SearchBar;