import React from "react";
import "./style.css";


function Headers(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    {/* Table headers that sort on click */}
                    <th scope="col"></th>
                    <th scope="col" className={props.className} id="name" onClick={props.sortedResults}>Name</th>
                    <th scope="col" className={props.className} id="phone" onClick={props.sortedResults}>Phone</th>
                    <th scope="col" className={props.className} id="email" onClick={props.sortedResults}>Email</th>
                    <th scope="col" className={props.className} id="age" onClick={props.sortedResults}>Age</th>
                </tr>
            </thead>
            <tbody>
                {/* For each result from axios call, populate a row with the following info */}
                {props.users.map(user => (
                    <tr key={user.phone}>
                        <td><img src={user.picture.medium} alt="user profile" /></td>
                        <td>{user.name.first} {user.name.last}</td>
                        <td>{user.phone}</td>
                        <td>{user.email}</td>
                        <td>{user.dob.age}</td>
                    </tr>
                ))}
            </tbody>
        </table >
    )
};

export default Headers;