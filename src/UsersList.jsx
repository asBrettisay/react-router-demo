import React, {Component} from 'react';
import {Link} from 'react-router';

class UsersList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }
    render() {
        const users = this.state.users.map(user => (
            <li><Link to={`/user/${user.name}`}>{user.name}</Link></li>
        ))

        return (
            <div>
                <h5>Users List!</h5>
                <ul>
                    {users}
                </ul>
            </div>
        )
    }

    componentDidMount() {
        console.log('fetching users');
        fetch('http://practiceapi.devmounta.in/api/animals')
        .then(res => res.json())
        .then(res => this.setState({users: res}));
    }
}

export default UsersList