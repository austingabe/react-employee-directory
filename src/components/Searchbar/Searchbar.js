import React from "react";

function Searchbar(props) {
    return (
        <div>
            <form>
                <input
                    onChange={props.filteredUsers}
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