import React from "react";

function Searchbar(props) {
    return (
        <div>
            <form>
                <input
                    // Enabling the ability to filter as the user types
                    onChange={props.filteredResults}
                    value={props.search}
                    type="text"
                    name="search"
                    placeholder="Search by Name"
                />
            </form>
            <br></br>
        </div>
    )
}

export default Searchbar;