import React from "react";
import "./style.css";


function Headers(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col" className="sort">Name<span onClick={props.sortedUsers}><i className={props.className} id="name"></i></span></th>
                    <th scope="col" className="sort">Phone<span onClick={props.sortedUsers}><i className={props.className} id="phone"></i></span></th>
                    <th scope="col" className="sort">Email<span onClick={props.sortedUsers}><i className={props.className} id="email"></i></span></th>
                    <th scope="col" className="sort">Age<span onClick={props.sortedUsers}><i className={props.className} id="age"></i></span></th>
                </tr>
            </thead>
            <tbody>
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