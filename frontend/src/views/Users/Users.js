import React, {useEffect, useState} from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table} from 'reactstrap';
import {getAllUsers} from '../../actions/users'
import {connect} from "react-redux";
import {UserRow} from "./UserRow";

const Users = (props) => {

    const {users} = props;

    useEffect(() => {
        props.getAllUsers();
    }, []);

    const usersRows = () => {
        return Array.isArray(users) ? users.map(user => <UserRow user={user}/> ) : null;
    };

    return (
        <div className="animated fadeIn">
            <Row>
                <Col>
                    <Card>
                        <CardHeader>
                            <i className="fa fa-align-justify"></i> Users <small className="text-muted">example</small>
                        </CardHeader>
                        <CardBody>
                            <Table responsive hover>
                                <thead>
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">name</th>
                                    <th scope="col">email</th>
                                    <th scope="col">phone</th>
                                    <th scope="col">address</th>
                                </tr>
                                </thead>
                                <tbody>
                                {usersRows()}
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
};


const bindActions = dispatch => ({
    getAllUsers: (queryParams, cb) => dispatch(getAllUsers(queryParams, cb))
});

const mapStateToProps = state => ({
    users: state.users.users
});

export default connect(mapStateToProps, bindActions)(Users);

