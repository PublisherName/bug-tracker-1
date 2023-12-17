import React from 'react'
import "./SearchBar.css"

function SearchBar() {
  return (
    <>
    <div className="search-form">
            <div>
                <label htmlFor="status">Status:</label>
                <select id="status" className="search-dropdown">
                    <option value="all">All</option>
                    <option value="open">Open</option>
                    <option value="closed">Closed</option>
                </select>

                <label htmlFor="priority">Priority:</label>
                <select id="priority" className="search-dropdown">
                    <option value="all">All</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>

            <input type="text" id="searchText" className="search-input" placeholder="Search..."/>
            <button className="search-btn" >Search</button>
        </div>
    </>
    )
}

export default SearchBar