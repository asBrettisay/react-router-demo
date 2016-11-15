import React, {Component} from 'react';

class User extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {}
        }
    }
    componentDidMount() {
        fetch(`http://practiceapi.devmounta.in/api/animals/${this.props.params.id}`)
        .then(res => res.json())
        .then(res => this.setState({
            user: res
        }))
    }
    render() {
        const userInfo = [];

        for (let key in this.state.user) {
            userInfo.push(<li>{key}: {this.state.user[key]}</li>)
        }
        return (
            <div>
                <h1>{this.state.user.name}</h1>
                <ul>{userInfo}</ul>
            </div>
        )
    }
}

export default User