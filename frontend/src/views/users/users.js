import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import {getAllUsers} from '../../actions/users'

const users = (props) => {
    const [users, setUsers] = useState(props.users);

    let usersList = '';

    useEffect(() => {
        usersList = users.map( (x,i) => (
            <li itemID={`user${i}`}>
                x.name
            </li>
        ));
    }, [users]);

    return (
        <ul id={'usersList'}>
            {usersList}
        </ul>
    );
};

const bindActions = dispatch => ({
   getAllUser: (payload, cb) => dispatch(getAllUsers(cb))
});

const mapStateToProps = state => ({
    users: state.users
});

export default connect(mapStateToProps, bindActions)(users);