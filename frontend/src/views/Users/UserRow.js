import {Link} from "react-router-dom";
import React from "react";

export const UserRow = (props) => {
    const {user} = props;
    const userLink = `/users/${user._id}`;

    return (
        <tr key={user._id} id={`user${user._id}`}>
            <th scope="row"><Link to={userLink}>{user._id}</Link></th>
            <td><Link to={userLink}>{user.name}</Link></td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.address}</td>
        </tr>
    )
};
